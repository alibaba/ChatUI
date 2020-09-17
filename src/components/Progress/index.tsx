import React from 'react';
import clsx from 'clsx';

export type ProgressProps = {
  className?: string;
  value: number;
  status?: 'active' | 'success' | 'error';
};

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>((props, ref) => {
  const { className, value, status, children, ...other } = props;

  return (
    <div
      className={clsx('Progress', status && `Progress--${status}`, className)}
      ref={ref}
      {...other}
    >
      <div
        className="Progress-bar"
        role="progressbar"
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {children}
      </div>
    </div>
  );
});
