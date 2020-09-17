import React from 'react';
import clsx from 'clsx';

export interface BackdropProps {
  className?: string;
  active?: boolean;
  onClick?: () => void;
}

export const Backdrop: React.FC<BackdropProps> = (props) => {
  const { className, active, onClick } = props;
  return (
    <div
      className={clsx('Backdrop', className, { active })}
      onClick={onClick}
      role="button"
      tabIndex={-1}
      aria-hidden
    />
  );
};
