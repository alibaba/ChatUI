import React, { useState, useRef, useEffect, useImperativeHandle, useCallback } from 'react';
import clsx from 'clsx';
import { IconButtonProps } from '../IconButton';
import { Recorder, RecorderProps } from '../Recorder';
import { Toolbar, ToolbarItemProps } from '../Toolbar';
import { AccessoryWrap } from './AccessoryWrap';
import { Popover } from '../Popover';
import { InputProps } from '../Input';
import { ToolbarItem } from './ToolbarItem';
import { ComposerInput } from './ComposerInput';
import { SendButton } from './SendButton';
import { Action } from './Action';
import toggleClass from '../../utils/toggleClass';

const FOCUSING_CLASS = 'S--focusing';

export type InputType = 'voice' | 'text';

export type ComposerProps = {
  wideBreakpoint?: string;
  text?: string;
  inputOptions?: InputProps;
  placeholder?: string;
  inputType?: InputType;
  onInputTypeChange?: (inputType: InputType) => void;
  recorder?: RecorderProps;
  onSend: (type: string, content: string) => void;
  onImageSend?: (file: File) => Promise<any>;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (value: string, event: React.ChangeEvent<Element>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  toolbar?: ToolbarItemProps[];
  onToolbarClick?: (item: ToolbarItemProps, event: React.MouseEvent) => void;
  onAccessoryToggle?: (isAccessoryOpen: boolean) => void;
  rightAction?: IconButtonProps;
};

export interface ComposerHandle {
  setText: (text: string) => void;
}

export const Composer = React.forwardRef<ComposerHandle, ComposerProps>((props, ref) => {
  const {
    text: initialText = '',
    inputType: initialInputType = 'text',
    wideBreakpoint,
    placeholder = '请输入...',
    recorder = {},
    onInputTypeChange,
    onFocus,
    onBlur,
    onChange,
    onSend,
    onImageSend,
    onAccessoryToggle,
    toolbar = [],
    onToolbarClick,
    rightAction,
    inputOptions,
  } = props;

  const [text, setText] = useState(initialText);
  const [inputType, setInputType] = useState(initialInputType || 'text');
  const [isAccessoryOpen, setAccessoryOpen] = useState(false);
  const [accessoryContent, setAccessoryContent] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null!);
  const focused = useRef(false);
  const blurTimer = useRef<any>();
  const popoverTarget = useRef<any>();
  const isMountRef = useRef(false);
  const [isWide, setWide] = useState(false);

  useEffect(() => {
    const mq =
      wideBreakpoint && window.matchMedia
        ? window.matchMedia(`(min-width: ${wideBreakpoint})`)
        : false;

    function handleMq(e: MediaQueryListEvent) {
      setWide(e.matches);
    }

    setWide(mq && mq.matches);

    if (mq) {
      mq.addListener(handleMq);
    }
    return () => {
      if (mq) {
        mq.removeListener(handleMq);
      }
    };
  }, [wideBreakpoint]);

  useEffect(() => {
    toggleClass('S--wide', isWide);
    if (!isWide) {
      setAccessoryContent('');
    }
  }, [isWide]);

  useEffect(() => {
    if (isMountRef.current && onAccessoryToggle) {
      onAccessoryToggle(isAccessoryOpen);
    }
  }, [isAccessoryOpen, onAccessoryToggle]);

  useEffect(() => {
    isMountRef.current = true;
  }, []);

  useImperativeHandle(ref, () => ({
    setText,
  }));

  const handleInputTypeChange = useCallback(() => {
    const isVoice = inputType === 'voice';
    const nextType = isVoice ? 'text' : 'voice';
    setInputType(nextType);

    if (isVoice) {
      const input = inputRef.current;
      input.focus();
      // eslint-disable-next-line no-multi-assign
      input.selectionStart = input.selectionEnd = input.value.length;
    }
    if (onInputTypeChange) {
      onInputTypeChange(nextType);
    }
  }, [inputType, onInputTypeChange]);

  const handleInputFocus = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      clearTimeout(blurTimer.current);
      toggleClass(FOCUSING_CLASS, true);
      focused.current = true;

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      blurTimer.current = setTimeout(() => {
        toggleClass(FOCUSING_CLASS, false);
        focused.current = false;
      }, 0);

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const send = useCallback(() => {
    onSend('text', text);
    setText('');

    if (focused.current) {
      inputRef.current.focus();
    }
  }, [onSend, text]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!e.shiftKey && e.keyCode === 13) {
        send();
        e.preventDefault();
      }
    },
    [send],
  );

  const handleTextChange = useCallback(
    (value: string, e: React.ChangeEvent) => {
      setText(value);

      if (onChange) {
        onChange(value, e);
      }
    },
    [onChange],
  );

  const handleSendBtnClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      send();
      e.preventDefault();
    },
    [send],
  );

  const handleAccessoryToggle = useCallback(() => {
    setAccessoryOpen(!isAccessoryOpen);
  }, [isAccessoryOpen]);

  const handleAccessoryBlur = useCallback(() => {
    setTimeout(() => {
      setAccessoryOpen(false);
      setAccessoryContent('');
    });
  }, []);

  const handleToolbarClick = useCallback(
    (item: ToolbarItemProps, e: React.MouseEvent) => {
      if (onToolbarClick) {
        onToolbarClick(item, e);
      }
      if (item.render) {
        popoverTarget.current = e.currentTarget;
        setAccessoryContent(item.render);
      }
    },
    [onToolbarClick],
  );

  const handlePopoverClose = useCallback(() => {
    setAccessoryContent('');
  }, []);

  const isInputText = inputType === 'text';
  const inputTypeIcon = isInputText ? 'volume-circle' : 'keyboard-circle';
  const hasToolbar = toolbar.length > 0;

  const inputProps = {
    ...inputOptions,
    value: text,
    inputRef,
    placeholder,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onKeyDown: handleInputKeyDown,
    onChange: handleTextChange,
    onImageSend,
  };

  if (isWide) {
    return (
      <div className="Composer Composer--lg">
        {hasToolbar &&
          toolbar.map((item) => (
            <ToolbarItem item={item} onClick={(e) => handleToolbarClick(item, e)} key={item.type} />
          ))}
        {accessoryContent && (
          <Popover
            active={!!accessoryContent}
            target={popoverTarget.current}
            onClose={handlePopoverClose}
          >
            {accessoryContent}
          </Popover>
        )}
        <div className="Composer-inputWrap">
          <ComposerInput invisible={false} {...inputProps} />
        </div>
        <SendButton onClick={handleSendBtnClick} disabled={!text} />
      </div>
    );
  }

  return (
    <>
      <div className="Composer">
        {recorder.canRecord && (
          <Action
            className="Composer-inputTypeBtn"
            data-icon={inputTypeIcon}
            icon={inputTypeIcon}
            onClick={handleInputTypeChange}
            aria-label={isInputText ? '切换到语音输入' : '切换到键盘输入'}
          />
        )}
        <div className="Composer-inputWrap">
          <ComposerInput invisible={!isInputText} {...inputProps} />
          {!isInputText && <Recorder {...recorder} />}
        </div>
        {!text && rightAction && <Action {...rightAction} />}
        {hasToolbar && (
          <Action
            className={clsx('Composer-toggleBtn', {
              active: isAccessoryOpen,
            })}
            icon="plus-circle"
            onClick={handleAccessoryToggle}
            aria-label={isAccessoryOpen ? '关闭工具栏' : '展开工具栏'}
          />
        )}
        {text && <SendButton onClick={handleSendBtnClick} disabled={false} />}
      </div>
      {isAccessoryOpen && (
        <AccessoryWrap onClickOutside={handleAccessoryBlur}>
          {accessoryContent || <Toolbar items={toolbar} onClick={handleToolbarClick} />}
        </AccessoryWrap>
      )}
    </>
  );
});
