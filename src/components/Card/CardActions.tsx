import React from 'react';
import clsx from 'clsx';

export interface CardActionsProps {
  className?: string;
  direction?: 'column' | 'row';
  children?: React.ReactNode;
}

export const CardActions = (props: CardActionsProps) => {
  const { children, className, direction, ...other } = props;
  return (
    <div
      className={clsx('CardActions', className, direction && `CardActions--${direction}`)}
      {...other}
    >
      {children}
    </div>
  );
};
