import React from 'react';
import clsx from 'clsx';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <div className={clsx('CardContent', className)} {...other} ref={ref}>
      {children}
    </div>
  );
});
