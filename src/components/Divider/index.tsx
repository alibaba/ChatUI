import React from 'react';
import clsx from 'clsx';

export type DividerProps = {
  className?: string;
  position?: 'center' | 'left' | 'right';
};

export const Divider: React.FC<DividerProps> = (props) => {
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
