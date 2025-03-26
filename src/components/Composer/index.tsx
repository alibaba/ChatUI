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
import { isIOS, isArkWeb } from '../../utils/ua';
import { updateViewportTop, setViewportTop } from './viewportTop';

export const CLASS_NAME_FOCUSING = 'S--focusing';

export type InputType = 'voice' | 'text';

export type ComposerProps = {
  wideBreakpoint?: string;
  text?: string;
  textOnce?: string;
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
  isX?: boolean;
};

export interface ComposerHandle {
  setText: (text: string) => void;
}

export const Composer = React.forwardRef<ComposerHandle, ComposerProps>((props, ref) => {
  const {
    text: initialText = '',
    textOnce: oTextOnce,
    inputType: initialInputType = 'text',
    wideBreakpoint,
    placeholder: oPlaceholder = '请输入...',
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
  const [textOnce, setTextOnce] = useState(oTextOnce);
  const [hasValue, setHasValue] = useState(!!text);
  const [placeholder, setPlaceholder] = useState(oTextOnce || oPlaceholder);
  const [inputType, setInputType] = useState(initialInputType || 'text');
  const [isAccessoryOpen, setAccessoryOpen] = useState(false);
  const [accessoryContent, setAccessoryContent] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null!);
  const focused = useRef(false);
  const blurTimer = useRef<any>();
  const valueTimer = useRef<NodeJS.Timeout>();
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

  useEffect(() => {
    const { visualViewport } = window;
    if (!visualViewport) return;

    let winHeight = window.innerHeight;

    function toggleFocusing() {
      if (window.innerHeight > winHeight) {
        // iOS 下第一次的时候 winHeight 有可能不准
        winHeight = window.innerHeight;
      }
      // 视窗变高做失焦处理
      // 场景：键盘收起键盘时并没有失去焦点
      if (focused.current && visualViewport!.height >= winHeight) {
        inputRef.current?.blur();
      }
    }

    function resizeHandler() {
      // Android 没有下面安全区且可以悬浮键盘，故不做收起失焦处理
      if (isIOS || isArkWeb) {
        toggleFocusing();
      }
    }

    visualViewport.addEventListener('resize', resizeHandler);
    return () => {
      visualViewport.removeEventListener('resize', resizeHandler);
    };
  }, []);

  useEffect(() => {
    if (text) {
      clearTimeout(valueTimer.current);
      setHasValue(true);
    } else {
      // 中文上屏时有一瞬间会无值，所以做延迟处理
      valueTimer.current = setTimeout(() => {
        setHasValue(false);
      });
    }
  }, [text]);

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
      toggleClass(CLASS_NAME_FOCUSING, true);
      focused.current = true;

      if (isIOS) {
        updateViewportTop();
      }

      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleInputBlur = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      blurTimer.current = setTimeout(() => {
        toggleClass(CLASS_NAME_FOCUSING, false);
        focused.current = false;
      }, 0);

      if (isIOS) {
        setViewportTop(0);
      }

      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const send = useCallback(() => {
    if (text) {
      onSend('text', text);
      setText('');
    } else if (textOnce) {
      onSend('text', textOnce);
    }
    if (textOnce) {
      setTextOnce('');
      setPlaceholder(oPlaceholder);
    }
    if (focused.current) {
      inputRef.current.focus();
    }
  }, [oPlaceholder, onSend, text, textOnce]);

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
  const inputTypeIcon = isInputText ? 'mic' : 'keyboard';
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
        <SendButton onClick={handleSendBtnClick} disabled={!hasValue} />
      </div>
    );
  }

  return (
    <>
      <div className="Composer" data-has-value={hasValue} data-has-text-once={!!textOnce}>
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
            icon="plus"
            onClick={handleAccessoryToggle}
            aria-label={isAccessoryOpen ? '关闭工具栏' : '展开工具栏'}
          />
        )}
        {hasValue && <SendButton onClick={handleSendBtnClick} disabled={!hasValue} />}
      </div>
      {isAccessoryOpen && (
        <AccessoryWrap onClickOutside={handleAccessoryBlur}>
          {accessoryContent || <Toolbar items={toolbar} onClick={handleToolbarClick} />}
        </AccessoryWrap>
      )}
    </>
  );
});
