/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { LocaleProvider } from '../LocaleProvider';
import { Navbar } from '../Navbar';
import { MessageContainer } from '../MessageContainer';
import { QuickReplies } from '../QuickReplies';
import { Composer as DComposer, ComposerProps } from '../Composer';
import { NavbarProps } from '../Navbar';
import { MessageProps } from '../Message/Message';
import { QuickReplyItemProps } from '../QuickReplies';

export type ChatProps = ComposerProps & {
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
  loadMoreText?: string;
  /**
   * 在消息列表上面的渲染函数
   */
  renderBeforeMessageList?: () => React.ReactNode;
  /**
   * 消息列表 ref
   */
  messagesRef?: any; // FIXME
  /**
   * 下拉加载回调
   */
  onRefresh?: () => Promise<any>;
  /**
   * 滚动消息列表回调
   */
  onScroll?: () => void;
  /**
   * 消息列表
   */
  messages: MessageProps[];
  /**
   * 消息内容渲染函数
   */
  renderMessageContent: (message: MessageProps) => React.ReactNode;
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
  composerRef?: any;
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
  onInputFocus?: () => void;
  /**
   * 输入框更新回调
   */
  onInputChange?: () => void;
  /**
   * 输入框失去焦点回调
   */
  onInputBlur?: () => void;
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
            placeholder={placeholder}
            onAccessoryToggle={onAccessoryToggle}
            recorder={recorder}
            toolbar={toolbar}
            onToolbarClick={onToolbarClick}
            onInputTypeChange={onInputTypeChange}
            onFocus={onInputFocus}
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
