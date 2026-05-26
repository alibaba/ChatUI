import React from 'react';
import clsx from 'clsx';

export interface RibbonProps {
  className?: string;
  position?: 'left' | 'center' | 'right';
  size?: 'sm' | 'md';
  color?: 'primary' | 'gray' | 'yellow';
  children?: React.ReactNode;
}

const Arc = ({ className }: { className?: string }) => {
  return (
    <svg className={clsx('Arc', className)} viewBox="0 0 12 12" width={6} height={6}>
      <path fill="currentColor" fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12V0z" />
    </svg>
  );
};

export const Ribbon = (props: RibbonProps) => {
  const { className, position = 'left', size = 'md', color = 'primary', children } = props;

  return (
    <div
      className={clsx('Ribbon', className)}
      data-position={position}
      data-size={size}
      data-color={color}
    >
      <Arc className="Arc-1" />
      <span className="Ribbon-text">{children}</span>
      <Arc className="Arc-2" />
    </div>
  );
};