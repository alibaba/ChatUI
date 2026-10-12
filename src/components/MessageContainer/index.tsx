/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { PullToRefresh, PullToRefreshHandle, ScrollToEndOptions } from '../PullToRefresh';
import { Message, MessageProps } from '../Message';
import { BackBottom } from '../BackBottom';
import canUse from '../../utils/canUse';
import throttle from '../../utils/throttle';
import getToBottom from '../../utils/getToBottom';

const listenerOpts = canUse('passiveListener') ? { passive: true } : false;

const DEFAULT_FOLLOW_SCREEN = 2;

export interface ScrollBehaviorConfig {
  /** 是否跟随自己发的消息，默认 true */
  followSelf?: boolean;
  /** 是否跟随收到的消息，默认 true */
  followIncoming?: boolean;
  /** 不在底部时是否显示新消息数量，默认 true */
  showNewCount?: boolean;
  /** 距离多少屏以内才自动跟随，默认 2 */
  followScreen?: number;
}

export interface MessageContainerProps {
  messages: MessageProps[];
  renderMessageContent: (message: MessageProps) => React.ReactNode;
  isTyping?: boolean;
  loadMoreText?: string;
  onRefresh?: () => Promise<any>;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  renderBeforeMessageList?: () => React.ReactNode;
  onBackBottomShow?: () => void;
  onBackBottomClick?: () => void;
  /** 滚动行为配置 */
  scrollBehaviorConfig?: ScrollBehaviorConfig;
}

export interface MessageContainerHandle {
  ref: React.RefObject<HTMLDivElement>;
  scrollToEnd: (options?: ScrollToEndOptions) => void;
}

function isNearBottom(el: HTMLElement, n: number) {
  const offsetHeight = Math.max(el.offsetHeight, 600);
  return getToBottom(el) < offsetHeight * n;
}

export const MessageContainer = React.forwardRef<MessageContainerHandle, MessageContainerProps>(
  (props, ref) => {
    const {
      messages,
      isTyping,
      loadMoreText,
      onRefresh,
      onScroll,
      renderBeforeMessageList,
      renderMessageContent,
      onBackBottomShow,
      onBackBottomClick,
      scrollBehaviorConfig = {},
    } = props;

    const [showBackBottom, setShowBackBottom] = useState(false);
    const [newCount, setNewCount] = useState(0);
    const showBackBottomtRef = useRef(showBackBottom);
    const newCountRef = useRef(newCount);
    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<PullToRefreshHandle>(null);
    const lastMessage = messages[messages.length - 1];
    const scrollBehaviorConfigRef = useRef<ScrollBehaviorConfig>(scrollBehaviorConfig);

    const clearBackBottom = () => {
      setNewCount(0);
      setShowBackBottom(false);
    };

    const scrollToEnd = useCallback((opts?: ScrollToEndOptions) => {
      if (scrollerRef.current) {
        if (!showBackBottomtRef.current || (opts && opts.force)) {
          scrollerRef.current.scrollToEnd(opts);
          if (showBackBottomtRef.current) {
            clearBackBottom();
          }
        }
      }
    }, []);

    const handleBackBottomClick = () => {
      scrollToEnd({ animated: false, force: true });
      // setNewCount(0);
      // setShowBackBottom(false);

      if (onBackBottomClick) {
        onBackBottomClick();
      }
    };

    const checkShowBottomRef = useRef(
      throttle((el: HTMLElement) => {
        if (isNearBottom(el, 3)) {
          if (newCountRef.current) {
            // 如果有新消息，离底部0.5屏-隐藏提示
            if (isNearBottom(el, 0.5)) {
              // setNewCount(0);
              // setShowBackBottom(false);
              clearBackBottom();
            }
          } else {
            setShowBackBottom(false);
          }
        } else {
          // 3屏+显示回到底部
          setShowBackBottom(true);
        }
      }),
    );

    const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      checkShowBottomRef.current(e.target);

      if (onScroll) {
        onScroll(e);
      }
    };

    useEffect(() => {
      newCountRef.current = newCount;
    }, [newCount]);

    useEffect(() => {
      showBackBottomtRef.current = showBackBottom;
    }, [showBackBottom]);

    useEffect(() => {
      scrollBehaviorConfigRef.current = scrollBehaviorConfig;
    }, [scrollBehaviorConfig]);

    useEffect(() => {
      const scroller = scrollerRef.current;
      const wrapper = scroller && scroller.wrapperRef.current;
      
      if (!wrapper || !lastMessage || lastMessage.position === 'pop') {
        return;
      }

      const {
        followSelf = true,
        followIncoming = true,
        followScreen = DEFAULT_FOLLOW_SCREEN,
        showNewCount = true,
      } = scrollBehaviorConfigRef.current;


      if (lastMessage.position === 'right') {
        // 自己发的消息
        if (followSelf) {
          scrollToEnd({ force: true });
        }
      } else {
        // 收到的消息
        if (followIncoming && isNearBottom(wrapper, followScreen)) {
          const animated = !!wrapper.scrollTop;
          scrollToEnd({ animated, force: true });
        } else {
          // 防止滚动条较底下的时候出现回到底部的按钮
          if (!isNearBottom(wrapper, Math.max(followScreen, DEFAULT_FOLLOW_SCREEN))) {
            if (showNewCount) {
              setNewCount((c) => c + 1);
            }
            setShowBackBottom(true);
          }
        }
      }
    }, [lastMessage, scrollToEnd]);

    useEffect(() => {
      scrollToEnd();
    }, [isTyping, scrollToEnd]);

    useEffect(() => {
      const wrapper = messagesRef.current!;

      let needBlur = false;
      let startY = 0;

      function reset() {
        needBlur = false;
        startY = 0;
      }

      function touchStart(e: TouchEvent) {
        const { activeElement } = document;
        if (activeElement && activeElement.nodeName === 'TEXTAREA') {
          needBlur = true;
          startY = e.touches[0].clientY;
        }
      }

      function touchMove(e: TouchEvent) {
        if (needBlur && Math.abs(e.touches[0].clientY - startY) > 20) {
          (document.activeElement as HTMLElement).blur();
          reset();
        }
      }

      wrapper.addEventListener('touchstart', touchStart, listenerOpts);
      wrapper.addEventListener('touchmove', touchMove, listenerOpts);
      wrapper.addEventListener('touchend', reset);
      wrapper.addEventListener('touchcancel', reset);

      return () => {
        wrapper.removeEventListener('touchstart', touchStart);
        wrapper.removeEventListener('touchmove', touchMove);
        wrapper.removeEventListener('touchend', reset);
        wrapper.removeEventListener('touchcancel', reset);
      };
    }, []);

    useImperativeHandle(ref, () => ({ ref: messagesRef, scrollToEnd }), [scrollToEnd]);

    return (
      <div className="MessageContainer" ref={messagesRef}>
        <div className="MessageContainer-before">
          {renderBeforeMessageList && renderBeforeMessageList()}
        </div>
        <PullToRefresh
          onRefresh={onRefresh}
          onScroll={handleScroll}
          loadMoreText={loadMoreText}
          ref={scrollerRef}
        >
          <div className="MessageList">
            {messages.map((msg) => (
              <Message {...msg} renderMessageContent={renderMessageContent} key={msg._id} />
            ))}
            {isTyping && <Message type="typing" _id="typing" />}
          </div>
        </PullToRefresh>
        {showBackBottom && (
          <BackBottom
            count={newCount}
            onClick={handleBackBottomClick}
            onDidMount={onBackBottomShow}
          />
        )}
      </div>
    );
  },
);
