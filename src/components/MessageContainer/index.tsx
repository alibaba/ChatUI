/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { PullToRefresh, PullToRefreshHandle, ScrollToEndOptions } from '../PullToRefresh';
import { Message, MessageProps } from '../Message';
import { BackBottom } from '../BackBottom';
import canUse from '../../utils/canUse';
import throttle from '../../utils/throttle';
import getToBottom from '../../utils/getToBottom';

const listenerOpts = canUse('passiveListener') ? { passive: true } : false;

export interface MessageContainerProps {
  messages: MessageProps[];
  renderMessageContent: (message: MessageProps) => React.ReactNode;
  loadMoreText?: string;
  onRefresh?: () => Promise<any>;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  renderBeforeMessageList?: () => React.ReactNode;
  onBackBottomShow?: () => void;
  onBackBottomClick?: () => void;
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
      loadMoreText,
      onRefresh,
      onScroll,
      renderBeforeMessageList,
      renderMessageContent,
      onBackBottomShow,
      onBackBottomClick,
    } = props;

    const [showBackBottom, setShowBackBottom] = useState(false);
    const [newCount, setNewCount] = useState(0);
    const showBackBottomtRef = useRef(showBackBottom);
    const newCountRef = useRef(newCount);
    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<PullToRefreshHandle>(null);
    const lastMessage = messages[messages.length - 1];

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
      const scroller = scrollerRef.current;
      const wrapper = scroller && scroller.wrapperRef.current;

      if (!wrapper || !lastMessage || lastMessage.position === 'pop') {
        return;
      }

      if (lastMessage.position === 'right') {
        // 自己发的消息，强制滚动到底部
        scrollToEnd({ force: true });
      } else if (isNearBottom(wrapper, 2)) {
        const animated = !!wrapper.scrollTop;
        scrollToEnd({ animated, force: true });
      } else {
        setNewCount((c) => c + 1);
        setShowBackBottom(true);
      }
    }, [lastMessage, scrollToEnd]);

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
      <div className="MessageContainer" ref={messagesRef} tabIndex={-1}>
        {renderBeforeMessageList && renderBeforeMessageList()}
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
