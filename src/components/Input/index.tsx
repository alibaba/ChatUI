import React, { useState, useEffect, useContext, useCallback } from 'react';
import clsx from 'clsx';
import { ThemeContext } from '../Form';
import useForwardRef from '../../hooks/useForwardRef';

function getCount(value: InputProps['value'], maxLength?: number) {
  return `${`${value}`.length}${maxLength ? `/${maxLength}` : ''}`;
}

export type InputRef = HTMLInputElement | HTMLTextAreaElement;

export interface InputProps extends Omit<React.InputHTMLAttributes<InputRef>, 'onChange'> {
  rows?: number;
  minRows?: number;
  maxRows?: number;
  maxLength?: number;
  showCount?: boolean;
  multiline?: boolean;
  autoSize?: boolean;
  onChange?: (value: string, event: React.ChangeEvent<InputRef>) => void;
}

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
    showCount = !!maxLength,
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
  const inputRef = useForwardRef(ref);
  const theme = useContext(ThemeContext);
  const isMultiline = multiline || autoSize || oRows > 1;
  const Element = isMultiline ? 'textarea' : 'input';
  const isLight = theme === 'light';

  useEffect(() => {
    if (!inputRef.current) return;

    const lhStr = getComputedStyle(inputRef.current, null).lineHeight;
    const lh = Number(lhStr.replace('px', ''));

    if (lh !== lineHeight) {
      setLineHeight(lh);
    }
  }, [inputRef, lineHeight]);

  const updateRow = useCallback(() => {
    if (!autoSize || !inputRef.current) return;

    const target = inputRef.current as HTMLTextAreaElement;
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
  }, [autoSize, inputRef, lineHeight, maxRows, minRows, placeholder]);

  useEffect(() => {
    if (value === '') {
      setRows(initialRows);
    } else {
      updateRow();
    }
  }, [initialRows, updateRow, value]);

  function handleChange(e: React.ChangeEvent<InputRef>) {
    updateRow();

    if (onChange) {
      const valueFromEvent = e.target.value;
      const shouldTrim = maxLength && valueFromEvent.length > maxLength;
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

  if (isLight || showCount) {
    return (
      <div
        className={clsx('InputWrapper', {
          'is-light': isLight,
          'has-counter': showCount,
        })}
      >
        <Element {...inputProps} />
        {isLight && <div className="Input-line" />}
        {showCount && <div className="Input-counter">{getCount(value, maxLength)}</div>}
      </div>
    );
  }
  return <Element {...inputProps} />;
});
