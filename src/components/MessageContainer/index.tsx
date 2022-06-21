/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { PullToRefresh, PullToRefreshHandle, ScrollToEndOptions } from '../PullToRefresh';
import { Message, MessageProps } from '../Message';
import canUse from '../../utils/canUse';

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

    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<PullToRefreshHandle>(null);
    const lastMessage = messages[messages.length - 1];

    useEffect(() => {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const wrapper = scroller.wrapperRef.current!;
      const animated = !!wrapper.scrollTop;
      scroller.scrollToEnd({ animated });
    }, [lastMessage]);

    useEffect(() => {
      const wrapper = messagesRef.current;
      if (!wrapper) return undefined;

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

    useImperativeHandle(
      ref,
      () => ({
        ref: messagesRef,
        scrollToEnd: scrollerRef.current!.scrollToEnd,
      }),
      [],
    );

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
          </div>
        </PullToRefresh>
      </div>
    );
  },
);
