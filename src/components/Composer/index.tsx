/* eslint-disable react/forbid-prop-types */
import React, { useState, useRef, useEffect, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { IconButtonProps } from '../IconButton';
import { Input } from '../Input';
import { Recorder, RecorderProps } from '../Recorder';
import { Toolbar } from '../Toolbar';
import { ClickOutside } from '../ClickOutside';
import { Popover } from '../Popover';
import { SendConfirm } from '../SendConfirm';
import { ToolbarItem } from './ToolbarItem';
import { Action } from './Action';
import riseInput from './riseInput';
import parseDataTransfer from '../../utils/parseDataTransfer';
import toggleClass from '../../utils/toggleClass';
import { ToolbarItemProps } from '../Toolbar';

const NO_HOME_BAR = 'S--noHomeBar';

export type InputType = 'voice' | 'text';

export type ComposerProps = {
  wideBreakpoint?: string;
  text?: string;
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
  } = props;

  const [text, setText] = useState(initialText);
  const [inputType, setInputType] = useState(initialInputType || 'text');
  const [isAccessoryOpen, setAccessoryOpen] = useState(false);
  const [accessoryContent, setAccessoryContent] = useState('');
  const [pastedImage, setPastedImage] = useState<File | null>(null);
  const composerRef = useRef<HTMLDivElement>(null!);
  const inputRef = useRef<HTMLInputElement>(null!);
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
  }, [isAccessoryOpen]);

  useEffect(() => {
    isMountRef.current = true;

    riseInput(inputRef.current, composerRef.current);
  }, []);

  useImperativeHandle(ref, () => ({
    setText(val) {
      setText(val);
    },
  }));

  function handleInputTypeChange() {
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

  function handleInputFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    clearTimeout(blurTimer.current);
    toggleClass(NO_HOME_BAR, true);
    focused.current = true;

    if (onFocus) {
      onFocus(e);
    }
  }

  function handleInputBlur(e: React.FocusEvent<HTMLTextAreaElement>) {
    blurTimer.current = setTimeout(() => {
      toggleClass(NO_HOME_BAR, false);
      focused.current = false;
    }, 0);

    if (onBlur) {
      onBlur(e);
    }
  }

  function send() {
    onSend('text', text);
    setText('');

    if (focused.current) {
      inputRef.current.focus();
    }
  }

  function handleInputKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (!e.shiftKey && e.keyCode === 13) {
      send();
      e.preventDefault();
    }
  }

  function handleTextChange(value: string, e: React.ChangeEvent) {
    setText(value);

    if (onChange) {
      onChange(value, e);
    }
  }

  function handlePaste(e: React.ClipboardEvent<any>) {
    parseDataTransfer(e, (file) => {
      setPastedImage(file);
    });
  }

  function handleImageCancel() {
    setPastedImage(null);
  }

  function handleImageSend() {
    if (onImageSend && pastedImage) {
      onImageSend(pastedImage).then(() => {
        setPastedImage(null);
      });
    }
  }

  function handleSendBtnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    send();
    e.preventDefault();
  }

  function handleAccessoryToggle() {
    setAccessoryOpen(!isAccessoryOpen);
  }

  function handleAccessoryBlur() {
    setTimeout(() => {
      setAccessoryOpen(false);
      setAccessoryContent('');
    });
  }

  function handleToolbarClick(item: ToolbarItemProps, e: React.MouseEvent) {
    if (onToolbarClick) {
      onToolbarClick(item, e);
    }
    if (item.render) {
      popoverTarget.current = e.currentTarget;
      setAccessoryContent(item.render);
    }
  }

  function handlePopoverClose() {
    setAccessoryContent('');
  }

  function renderExtra() {
    const accessory = accessoryContent || <Toolbar items={toolbar} onClick={handleToolbarClick} />;
    return <ClickOutside onClick={handleAccessoryBlur}>{accessory}</ClickOutside>;
  }

  const isInputText = inputType === 'text';
  const inputTypeIcon = isInputText ? 'mic' : 'keyboard';
  const hasToolbar = toolbar.length > 0;

  const renderInput = (minRows: number) => (
    <div className={clsx({ 'S--invisible': !isInputText })}>
      <Input
        className="Composer-input"
        value={text}
        minRows={minRows}
        rows={1}
        autoSize
        ref={inputRef}
        placeholder={placeholder}
        enterKeyHint="send"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyDown}
        onChange={handleTextChange}
        onPaste={onImageSend ? handlePaste : undefined}
      />
      {handlePaste && (
        <SendConfirm file={pastedImage!} onCancel={handleImageCancel} onSend={handleImageSend} />
      )}
    </div>
  );

  if (isWide) {
    return (
      <div className="Composer Composer--lg" ref={composerRef}>
        {hasToolbar && (
          <div className="Composer-toolbar">
            {toolbar.map((item) => (
              <ToolbarItem
                item={item}
                onClick={(e) => handleToolbarClick(item, e)}
                key={item.type}
              />
            ))}
          </div>
        )}
        {accessoryContent && (
          <Popover
            active={!!accessoryContent}
            target={popoverTarget.current}
            onClose={handlePopoverClose}
          >
            {accessoryContent}
          </Popover>
        )}
        <div className="Composer-inputWrap">{renderInput(3)}</div>
        <Action
          className="Composer-sendBtn"
          icon="paper-plane"
          color="primary"
          disabled={!text}
          onMouseDown={handleSendBtnClick}
          aria-label="发送"
        />
      </div>
    );
  }

  return (
    <>
      <div className="Composer" ref={composerRef}>
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
          {renderInput(1)}
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
        {text && (
          <Action
            className="Composer-sendBtn"
            icon="paper-plane"
            color="primary"
            onMouseDown={handleSendBtnClick}
            aria-label="发送"
          />
        )}
      </div>
      {isAccessoryOpen && renderExtra()}
    </>
  );
});
