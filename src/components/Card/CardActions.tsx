import React from 'react';
import clsx from 'clsx';

export interface CardActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  direction?: 'column' | 'row';
  children?: React.ReactNode;
}

export const CardActions = React.forwardRef<HTMLDivElement, CardActionsProps>((props, ref) => {
  const { children, className, direction, ...other } = props;
  return (
    <div
      className={clsx('CardActions', className, direction && `CardActions--${direction}`)}
      {...other}
      ref={ref}
    >
      {children}
    </div>
  );
});
