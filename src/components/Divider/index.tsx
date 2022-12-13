import React from 'react';
import clsx from 'clsx';

export interface DividerProps {
  className?: string;
  position?: 'center' | 'left' | 'right';
  children?: React.ReactNode;
}

export const Divider = (props: DividerProps) => {
  const { className, position = 'center', children, ...other } = props;
  return (
    <div
      className={clsx('Divider', !!children && `Divider--text-${position}`, className)}
      role="separator"
      {...other}
    >
      {children}
    </div>
  );
};
