import React from 'react';
import clsx from 'clsx';
import useForwardRef from '../../hooks/useForwardRef';
import getToBottom from '../../utils/getToBottom';

export interface InfiniteScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  disabled?: boolean;
  distance?: number;
  onLoadMore: () => void;
}

export const InfiniteScroll = React.forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (props, ref) => {
    const { className, disabled, distance = 0, children, onLoadMore, onScroll, ...other } = props;
    const wrapperRef = useForwardRef(ref);

    function handleScroll(e: React.UIEvent<HTMLDivElement>) {
      if (onScroll) {
        onScroll(e);
      }

      const el = wrapperRef.current;
      if (!el) return;

      const nearBottom = getToBottom(el) <= distance;

      if (nearBottom) {
        onLoadMore();
      }
    }

    return (
      <div
        className={clsx('InfiniteScroll', className)}
        role="feed"
        onScroll={!disabled ? handleScroll : undefined}
        ref={wrapperRef}
        {...other}
      >
        {children}
      </div>
    );
  },
);
