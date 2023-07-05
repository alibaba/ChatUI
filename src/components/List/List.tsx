import React from 'react';
import clsx from 'clsx';

export interface ListProps {
  className?: string;
  bordered?: boolean;
  children?: React.ReactNode;
}

export const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { bordered = false, className, children } = props;
  return (
    <div className={clsx('List', { 'List--bordered': bordered }, className)} role="list" ref={ref}>
      {children}
    </div>
  );
});
