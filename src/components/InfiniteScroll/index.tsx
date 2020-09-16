import React, { useRef } from 'react';
import clsx from 'clsx';

export type InfiniteScrollProps = {
  className?: string;
  disabled?: boolean;
  distance?: number;
  onLoadMore: () => void;
};

export const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  const { className, disabled, distance = 0, children, onLoadMore, ...other } = props;
  const wrapperRef = useRef<HTMLDivElement>(null!);

  function handleScroll() {
    if (disabled) return;

    const el = wrapperRef.current;
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight <= distance;

    if (nearBottom) {
      onLoadMore();
    }
  }

  return (
    <div
      className={clsx('InfiniteScroll', className)}
      role="feed"
      onScroll={handleScroll}
      ref={wrapperRef}
      {...other}
    >
      {children}
    </div>
  );
};
