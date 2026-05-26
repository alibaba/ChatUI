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
import { MarqueeBorder } from './MarqueeBorder';
import { VoiceInput, VoiceInputStatus } from '../VoiceInput';
import toggleClass from '../../utils/toggleClass';
import { isIOS, isArkWeb, isAliApp } from '../../utils/ua';
import { updateViewportTop, setViewportTop } from './viewportTop';

export const CLASS_NAME_FOCUSING = 'S--focusing';

/** 阻止 mouseup 冒泡，用于拦截 ClickOutside 的 document 监听 */
const stopMouseUp = (ev: MouseEvent) => {
  ev.stopPropagation();
};

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
  /** 是否启用新版语音输入 UI 面板（语音输入配置仍通过 recorder 属性传递） */
  enableNewVoiceInput?: boolean;
  onSend: (type: string, content: string) => void;
  onBeforeSend?: (type: string, content: string) => boolean | Promise<boolean>;
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
    enableNewVoiceInput,
    onInputTypeChange,
    onFocus,
    onBlur,
    onChange,
    onSend,
    onBeforeSend,
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
  const [isVoicePanelOpen, setVoicePanelOpen] = useState(false);
  // 新版语音输入 UI 面板状态
  const [voiceStatus, setVoiceStatus] = useState<VoiceInputStatus>(VoiceInputStatus.INITED);
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
      if (isIOS || (isArkWeb && isAliApp)) {
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

  // 聚焦输入框 语音面板收起、唤起键盘后 重新计算 viewport-top（iOS）
  useEffect(() => {
    if (!isVoicePanelOpen && isIOS && focused.current) {
      // 面板收起后延迟触发 updateViewportTop，等待软键盘弹出稳定
      const timer = setTimeout(() => {
        updateViewportTop();
      }, 300);
      return () => clearTimeout(timer);
    }
    return;
  }, [isVoicePanelOpen]);

  useImperativeHandle(ref, () => ({
    setText,
  }));

  const handleInputTypeChange = useCallback(() => {
    if (enableNewVoiceInput) {
      // 启用了新版语音输入 UI，使用 VoiceInput 面板交互
      const willOpenVoicePanel = !isVoicePanelOpen;
      const nextType = willOpenVoicePanel ? 'voice' : 'text';
      setInputType(nextType);
      setVoicePanelOpen(willOpenVoicePanel);
      if (willOpenVoicePanel) {
        // 打开语音面板时自动关闭工具栏，避免两个面板同时显示
        setAccessoryOpen(false);
        setAccessoryContent('');
      } else {
        // 关闭语音面板时重置语音输入状态、聚焦和选区文本输入框
        setVoiceStatus(VoiceInputStatus.INITED);
        const input = inputRef.current;
        input.focus();
        input.selectionStart = input.selectionEnd = input.value.length;
      }
      if (onInputTypeChange) {
        onInputTypeChange(nextType);
      }
    } else {
      // 原有逻辑：切换内联 Recorder
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
    }
  }, [inputType, onInputTypeChange, enableNewVoiceInput, isVoicePanelOpen]);

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

  const send = useCallback(async () => {
    const sendType = 'text';
    const sendContent = text || textOnce || '';

    if (!sendContent) return;

    if (onBeforeSend) {
      const allowed = await Promise.resolve(onBeforeSend(sendType, sendContent));
      if (!allowed) {
        return;
      }
    }

    if (text) {
      onSend(sendType, text);
      setText('');
    } else if (textOnce) {
      onSend(sendType, textOnce);
    }
    if (textOnce) {
      setTextOnce('');
      setPlaceholder(oPlaceholder);
    }
    if (focused.current) {
      inputRef.current.focus();
    }
  }, [oPlaceholder, onBeforeSend, onSend, text, textOnce]);

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
      // 语音面板展开时，阻止本次点击后续的 mouseup 冒泡到 document
      // 否则 VoiceInput 内部的 ClickOutside（bubble 阶段监听 document.mouseup）会把面板收起
      // 利用 capture 阶段 + once，抢在 ClickOutside 前处理，且不影响其他场景
      if (isVoicePanelOpen) {
        document.addEventListener('mouseup', stopMouseUp, { capture: true, once: true });
      }
      send();
      e.preventDefault();
    },
    [send, isVoicePanelOpen],
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

  /** 语音输入状态变化处理 - 联动输入框样式 */
  const handleVoiceStatusChange = useCallback((status: VoiceInputStatus) => {
    setVoiceStatus(status);
  }, []);

  /** 关闭语音面板 */
  const handleVoicePanelClose = useCallback(() => {
    setVoicePanelOpen(false);
    setInputType('text');
    setVoiceStatus(VoiceInputStatus.INITED);
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
      <div
        className="Composer"
        data-has-value={hasValue}
        data-has-text-once={!!textOnce}
        data-voice-status={voiceStatus}
        data-new-voice-input={!!enableNewVoiceInput}
      >
        {recorder.canRecord && (
          <Action
            className="Composer-inputTypeBtn"
            data-icon={inputTypeIcon}
            icon={inputTypeIcon}
            onClick={handleInputTypeChange}
            onMouseUp={(e) => e.stopPropagation()}
            aria-label={isInputText ? '切换到语音输入' : '切换到键盘输入'}
          />
        )}
        <div className="Composer-inputWrap">
          <ComposerInput invisible={!isInputText && !enableNewVoiceInput} {...inputProps} />
          {!isInputText && !enableNewVoiceInput && <Recorder {...recorder} />}
          {enableNewVoiceInput && <MarqueeBorder />}
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
      {enableNewVoiceInput && isVoicePanelOpen && (
        <VoiceInput
          onStart={recorder.onStart}
          onEnd={recorder.onEnd}
          onCancel={recorder.onCancel}
          onStatusChange={handleVoiceStatusChange}
          onClose={handleVoicePanelClose}
        />
      )}
    </>
  );
});
