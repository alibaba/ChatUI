import React, { useState, useLayoutEffect, useRef } from 'react';
import { ScrollView, ScrollViewHandle } from '../ScrollView/ScrollView';
import { QuickReply, QuickReplyItemProps } from './QuickReply';

export interface QuickRepliesProps {
  items: QuickReplyItemProps[];
  visible?: boolean;
  onClick: (item: QuickReplyItemProps, index: number) => void;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
}

const QuickReplies = (props: QuickRepliesProps) => {
  const { items, visible, onClick, onScroll } = props;
  const scroller = useRef<ScrollViewHandle>(null);
  const [scrollEvent, setScrollEvent] = useState(!!onScroll);

  useLayoutEffect(() => {
    if (scroller.current) {
      setScrollEvent(false);
      scroller.current.scrollTo({ x: 0, y: 0 });
      setTimeout(() => {
        setScrollEvent(true);
      }, 500);
    }
  }, [items]);

  if (!items.length) return null;

  return (
    <ScrollView
      className="QuickReplies"
      data={items}
      itemKey="code"
      ref={scroller}
      data-visible={visible}
      fullWidth
      onScroll={scrollEvent ? onScroll : undefined}
      renderItem={(item: QuickReplyItemProps, index) => (
        <QuickReply item={item} index={index} onClick={onClick} key={item.name} />
      )}
    />
  );
};

QuickReplies.defaultProps = {
  items: [],
  visible: true,
};

export default React.memo(QuickReplies);
