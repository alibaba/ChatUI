import React from 'react';
import clsx from 'clsx';

export interface CardTextProps {
  className?: string;
  children?: React.ReactNode;
}

export const CardText = (props: CardTextProps) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardText', className)} {...other}>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
};
