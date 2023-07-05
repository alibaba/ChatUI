import React from 'react';
import clsx from 'clsx';

export interface CardTextProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardText = React.forwardRef<HTMLDivElement, CardTextProps>((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardText', className)} {...other} ref={ref}>
      {typeof children === 'string' ? <p>{children}</p> : children}
    </div>
  );
});
