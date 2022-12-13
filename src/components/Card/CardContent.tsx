import React from 'react';
import clsx from 'clsx';

export interface CardContentProps {
  className?: string;
  children?: React.ReactNode;
}

export const CardContent = (props: CardContentProps) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardContent', className)} {...other}>
      {children}
    </div>
  );
};
