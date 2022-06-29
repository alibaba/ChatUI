import React, { useEffect } from 'react';
import { LocaleProvider } from '../LocaleProvider';
import { Navbar, NavbarProps } from '../Navbar';
import {
  MessageContainer,
  MessageContainerProps,
  MessageContainerHandle,
} from '../MessageContainer';
import { QuickReplies, QuickReplyItemProps } from '../QuickReplies';
import { Composer as DComposer, ComposerProps, ComposerHandle } from '../Composer';
import isSafari from '../../utils/isSafari';

export type ChatProps = Omit<ComposerProps, 'onFocus' | 'onChange' | 'onBlur'> &
  MessageContainerProps & {
    /**
     * 宽版模式断点
     */
    // wideBreakpoint?: string;
    /**
     * 当前语言
     */
    locale?: string;
    /**
     * 多语言
     */
    locales?: any; // FIXME
    /**
     * 导航栏配置
     */
    navbar?: NavbarProps;
    /**
     * 导航栏渲染函数
     */
    renderNavbar?: () => React.ReactNode;
    /**
     * 加载更多文案
     */
    // loadMoreText?: string;
    /**
     * 在消息列表上面的渲染函数
     */
    // renderBeforeMessageList?: () => React.ReactNode;
    /**
     * 消息列表 ref
     */
    messagesRef?: React.RefObject<MessageContainerHandle>;
    /**
     * 下拉加载回调
     */
    // onRefresh?: () => Promise<any>;
    /**
     * 滚动消息列表回调
     */
    // onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    /**
     * 消息列表
     */
    // messages: MessageProps[];
    /**
     * 消息内容渲染函数
     */
    // renderMessageContent: (message: MessageProps) => React.ReactNode;
    /**
     * 快捷短语
     */
    quickReplies?: QuickReplyItemProps[];
    /**
     * 快捷短语是否可见
     */
    quickRepliesVisible?: boolean;
    /**
     * 快捷短语的点击回调
     */
    onQuickReplyClick?: (item: QuickReplyItemProps, index: number) => void;
    /**
     * 快捷短语的滚动回调
     */
    onQuickReplyScroll?: () => void;
    /**
     * 快捷短语渲染函数
     */
    renderQuickReplies?: () => void;
    /**
     * 输入区 ref
     */
    composerRef?: React.RefObject<ComposerHandle>;
    /**
     * 输入框初始内容
     */
    // text?: string;
    /**
     * 输入框占位符
     */
    // placeholder?: string;
    /**
     * 输入框聚焦回调
     */
    onInputFocus?: ComposerProps['onFocus'];
    /**
     * 输入框更新回调
     */
    onInputChange?: ComposerProps['onChange'];
    /**
     * 输入框失去焦点回调
     */
    onInputBlur?: ComposerProps['onBlur'];
    /**
     * 发送消息回调
     */
    // onSend: (type: string, content: string) => void;
    /**
     * 发送图片回调
     */
    // onImageSend?: (file: File) => Promise<any>;
    /**
     * 输入方式
     */
    // inputType?: InputType;
    /**
     * 输入方式切换回调
     */
    // onInputTypeChange?: () => void;
    /**
     * 语音输入
     */
    // recorder?: RecorderProps;
    /**
     * 工具栏
     */
    // toolbar?: ToolbarItemProps[];
    /**
     * 点击工具栏回调
     */
    // onToolbarClick?: () => void;
    /**
     * 点击附加内容回调
     */
    // onAccessoryToggle?: () => void;
    /**
     * 输入组件
     */
    Composer?: React.ElementType; // FIXME
  };

export const Chat = React.forwardRef<HTMLDivElement, ChatProps>((props, ref) => {
  const {
    wideBreakpoint,
    locale = 'zh-CN',
    locales,
    navbar,
    renderNavbar,
    loadMoreText,
    renderBeforeMessageList,
    messagesRef,
    onRefresh,
    onScroll,
    messages = [],
    renderMessageContent,
    onBackBottomShow,
    onBackBottomClick,
    quickReplies = [],
    quickRepliesVisible,
    onQuickReplyClick = () => {},
    onQuickReplyScroll,
    renderQuickReplies,
    text,
    placeholder,
    onInputFocus,
    onInputChange,
    onInputBlur,
    onSend,
    onImageSend,
    inputOptions,
    composerRef,
    inputType,
    onInputTypeChange,
    recorder,
    toolbar,
    onToolbarClick,
    onAccessoryToggle,
    rightAction,
    Composer = DComposer,
  } = props;

  function handleInputFocus(e: React.FocusEvent<HTMLTextAreaElement>) {
    if (messagesRef && messagesRef.current) {
      messagesRef.current.scrollToEnd({ animated: false, force: true });
    }
    if (onInputFocus) {
      onInputFocus(e);
    }
  }

  useEffect(() => {
    if (isSafari()) {
      document.documentElement.dataset.safari = '';
    }
  }, []);

  return (
    <LocaleProvider locale={locale} locales={locales}>
      <div className="ChatApp" ref={ref}>
        {renderNavbar ? renderNavbar() : navbar && <Navbar {...navbar} />}
        <MessageContainer
          ref={messagesRef}
          loadMoreText={loadMoreText}
          messages={messages}
          renderBeforeMessageList={renderBeforeMessageList}
          renderMessageContent={renderMessageContent}
          onRefresh={onRefresh}
          onScroll={onScroll}
          onBackBottomShow={onBackBottomShow}
          onBackBottomClick={onBackBottomClick}
        />
        <div className="ChatFooter">
          {renderQuickReplies ? (
            renderQuickReplies()
          ) : (
            <QuickReplies
              items={quickReplies}
              visible={quickRepliesVisible}
              onClick={onQuickReplyClick}
              onScroll={onQuickReplyScroll}
            />
          )}
          <Composer
            wideBreakpoint={wideBreakpoint}
            ref={composerRef}
            inputType={inputType}
            text={text}
            inputOptions={inputOptions}
            placeholder={placeholder}
            onAccessoryToggle={onAccessoryToggle}
            recorder={recorder}
            toolbar={toolbar}
            onToolbarClick={onToolbarClick}
            onInputTypeChange={onInputTypeChange}
            onFocus={handleInputFocus}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onSend={onSend}
            onImageSend={onImageSend}
            rightAction={rightAction}
          />
        </div>
      </div>
    </LocaleProvider>
  );
});
