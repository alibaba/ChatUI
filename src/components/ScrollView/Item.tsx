import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';

export type ScrollViewEffect = 'slide';

export type ScrollViewItemProps = {
  item: any;
  effect?: ScrollViewEffect;
  onIntersect?: (item: any, entry: IntersectionObserverEntry) => boolean;
};

export const Item: React.FC<ScrollViewItemProps> = (props) => {
  const { item, effect, children, onIntersect } = props;
  const itemRef = useRef<HTMLDivElement>(null);
  const options = {
    threshold: [0, 0.1],
  };

  useEffect(() => {
    if (!onIntersect) return () => {};

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.intersectionRatio > 0) {
        // 根据回调返回值判断是否继续监听
        if (!onIntersect(item, entry)) {
          observer.unobserve(entry.target);
        }
      }
    }, options);

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [children]);

  return (
    <div
      className={clsx('ScrollView-item', {
        'slide-in-right-item': effect === 'slide',
      })}
      ref={itemRef}
    >
      {children}
    </div>
  );
};
