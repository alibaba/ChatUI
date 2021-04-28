import React from 'react';
import clsx from 'clsx';

export interface BackdropProps {
  className?: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Backdrop = (props: BackdropProps) => {
  const { className, active, onClick, ...rest } = props;
  return (
    <div
      className={clsx('Backdrop', className, { active })}
      onClick={onClick}
      role="button"
      tabIndex={-1}
      aria-hidden
      {...rest}
    />
  );
};
