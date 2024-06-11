import React from 'react';
import clsx from 'clsx';

export type ListProps = {
  className?: string;
  bordered?: boolean;
  variant?: 'buttons';
  children?: React.ReactNode;
};

export const List = React.forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { bordered = false, className, variant, children } = props;
  return (
    <div
      className={clsx('List', { 'List--bordered': bordered }, className)}
      data-variant={variant}
      role="list"
      ref={ref}
    >
      {children}
    </div>
  );
});
