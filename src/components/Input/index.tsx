import React, { useState, useEffect, useRef, useContext } from 'react';
import clsx from 'clsx';
import { ThemeContext } from '../Form';

function renderCounter(value = '', maxLength?: number) {
  return maxLength ? <div className="Input-counter">{`${value.length}/${maxLength}`}</div> : null;
}

export type InputRef = HTMLInputElement | HTMLTextAreaElement;

export type InputProps = {
  className?: string;
  type?: string;
  value: string;
  placeholder?: string;
  rows?: number;
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
  multiline?: boolean;
  autoSize?: boolean;
  disabled?: boolean;
  enterKeyHint?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onPaste?: (event: React.ClipboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const Input = React.forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    className,
    type = 'text',
    value,
    placeholder,
    rows: oRows = 1,
    minRows = oRows,
    maxRows = 5,
    maxLength,
    multiline,
    autoSize,
    onChange,
    ...other
  } = props;

  let initialRows = oRows;
  if (initialRows < minRows) {
    initialRows = minRows;
  } else if (initialRows > maxRows) {
    initialRows = maxRows;
  }

  const [rows, setRows] = useState(initialRows);
  const [lineHeight, setLineHeight] = useState(21);
  const inputRef = (ref as React.MutableRefObject<InputRef>) || useRef<InputRef>(null);
  const theme = useContext(ThemeContext);
  const isMultiline = multiline || autoSize || oRows > 1;
  const Element = isMultiline ? 'textarea' : 'input';
  const hasCounter = !!maxLength;
  const isLight = theme === 'light';

  useEffect(() => {
    const lhStr = getComputedStyle(inputRef.current, null).lineHeight;
    const lh = Number(lhStr.replace('px', ''));

    if (lh !== lineHeight) {
      setLineHeight(lh);
    }
  }, []);

  function updateRow() {
    if (!autoSize) return;

    const target = (inputRef as React.MutableRefObject<HTMLTextAreaElement>).current;
    const prevRows = target.rows;
    target.rows = minRows;

    if (placeholder) {
      target.placeholder = '';
    }

    // eslint-disable-next-line no-bitwise
    const currentRows = ~~(target.scrollHeight / lineHeight);

    if (currentRows === prevRows) {
      target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      target.rows = maxRows;
      target.scrollTop = target.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);

    if (placeholder) {
      target.placeholder = placeholder;
    }
  }

  useEffect(() => {
    if (value === '') {
      setRows(initialRows);
    } else {
      updateRow();
    }
  }, [value]);

  function handleChange(e: React.ChangeEvent<InputRef>) {
    updateRow();

    if (onChange) {
      const valueFromEvent = e.target.value;
      const shouldTrim = isMultiline && maxLength && valueFromEvent.length > maxLength;
      const val = shouldTrim ? valueFromEvent.substr(0, maxLength) : valueFromEvent;
      onChange(val, e);
    }
  }

  const inputProps = {
    ...other,
    className: clsx('Input', className),
    type,
    ref: inputRef as any,
    rows,
    value,
    placeholder,
    maxLength,
    onChange: handleChange,
  };

  if (isLight || hasCounter) {
    return (
      <div
        className={clsx('InputWrapper', {
          'is-light': isLight,
          'has-counter': hasCounter,
        })}
      >
        <Element {...inputProps} />
        {isLight && <div className="Input-line" />}
        {renderCounter(value, maxLength)}
      </div>
    );
  }
  return <Element {...inputProps} />;
});
