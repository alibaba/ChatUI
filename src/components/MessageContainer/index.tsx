/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { PullToRefresh, PullToRefreshHandle, ScrollToEndOptions } from '../PullToRefresh';
import { Message, MessageProps } from '../Message';
import { BackBottom } from '../BackBottom';
import canUse from '../../utils/canUse';
import getToBottom from '../../utils/getToBottom';

const listenerOpts = canUse('passiveListener') ? { passive: true } : false;

export interface MessageContainerProps {
  messages: MessageProps[];
  renderMessageContent: (message: MessageProps) => React.ReactNode;
  loadMoreText?: string;
  onRefresh?: () => Promise<any>;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  renderBeforeMessageList?: () => React.ReactNode;
}

export interface MessageContainerHandle {
  ref: React.RefObject<HTMLDivElement>;
  scrollToEnd: (options?: ScrollToEndOptions) => void;
}

function getMaxOffsetHeight(wrapper: HTMLElement) {
  return wrapper.offsetHeight * 1.5;
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
    } = props;

    const [showBackBottom, setShowBackBottom] = useState(false);
    const [newCount, setNewCount] = useState(0);
    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<PullToRefreshHandle>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const isTouching = useRef(false);
    const lastMessage = messages[messages.length - 1];

    const scrollToEnd = useCallback((opts?: ScrollToEndOptions) => {
      if (scrollerRef.current) {
        scrollerRef.current.scrollToEnd(opts);
      }
    }, []);

    const handleScrollToEnd = () => {
      scrollToEnd({ animated: false });
      setShowBackBottom(false);
      setNewCount(0);
    };

    useEffect(() => {
      const scroller = scrollerRef.current;
      const wrapper = scroller && scroller.wrapperRef.current;

      if (!wrapper) {
        return;
      }

      if (lastMessage.position === 'right') {
        scrollToEnd();
      } else if (getToBottom(wrapper) < getMaxOffsetHeight(wrapper)) {
        const animated = !!wrapper.scrollTop;
        scrollToEnd({ animated });
      } else {
        setShowBackBottom(true);
        setNewCount((c) => c + 1);
      }
    }, [lastMessage, scrollToEnd]);

    useEffect(() => {
      const scroller = scrollerRef.current;
      const wrapper = scroller && scroller.wrapperRef.current;

      if (!wrapper) {
        return;
      }

      const options = {
        root: wrapper,
        rootMargin: `0px 0px ${getMaxOffsetHeight(wrapper)}px 0px`,
        threshold: 1.0,
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (!isTouching.current) {
          if (entry.isIntersecting) {
            setShowBackBottom(false);
            setNewCount(0);
          } else {
            setShowBackBottom(true);
          }
        }
      }, options);

      observer.observe(bottomRef.current!);

      return () => {
        observer.disconnect();
      };
    }, []);

    useEffect(() => {
      const wrapper = messagesRef.current!;

      let needBlur = false;
      let startY = 0;

      function reset() {
        needBlur = false;
        startY = 0;
        isTouching.current = false;
      }

      function touchStart(e: TouchEvent) {
        const { activeElement } = document;
        if (activeElement && activeElement.nodeName === 'TEXTAREA') {
          needBlur = true;
          startY = e.touches[0].clientY;
        }
        isTouching.current = true;
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
          onScroll={onScroll}
          loadMoreText={loadMoreText}
          ref={scrollerRef}
        >
          <div className="MessageList">
            {messages.map((msg) => (
              <Message {...msg} renderMessageContent={renderMessageContent} key={msg._id} />
            ))}
            <div ref={bottomRef} />
          </div>
        </PullToRefresh>
        {showBackBottom && <BackBottom count={newCount} onClick={handleScrollToEnd} />}
      </div>
    );
  },
);
