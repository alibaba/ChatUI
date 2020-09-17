import React from 'react';
import clsx from 'clsx';

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps {
  className?: string;
  size?: CardSize;
  fluid?: boolean;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, size, fluid, children, ...other } = props;

  return (
    <div
      className={clsx('Card', size && `Card--${size}`, { 'Card--fluid': fluid }, className)}
      {...other}
      ref={ref}
    >
      {children}
    </div>
  );
});
