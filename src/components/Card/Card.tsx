import React from 'react';
import clsx from 'clsx';
import { useConfig } from '../ConfigProvider';

export type CardSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: CardSize;
  fluid?: boolean | 'order';
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const { className, size, fluid, children, ...other } = props;
  const configCtx = useConfig();

  return (
    <div
      className={clsx('Card', size && `Card--${size}`, { 'Card--fluid': fluid }, className)}
      data-fluid={fluid}
      data-elder-mode={configCtx.elderMode}
      {...other}
      ref={ref}
    >
      {children}
    </div>
  );
});
