import React from 'react';
import clsx from 'clsx';

export type CardContentProps = {
  className?: string;
};

export const CardContent: React.FC<CardContentProps> = (props) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardContent', className)} {...other}>
      {children}
    </div>
  );
};
