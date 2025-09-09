import React from 'react';
import clsx from 'clsx';

export type KvListProps = {
  className?: string;
  align?: 'left' | 'right';
  children?: React.ReactNode;
};

export const KvList = (props: KvListProps) => {
  const { className, align = 'left', children } = props;

  return (
    <div className={clsx('KvList', className)} data-align={align} role="list">
      {children}
    </div>
  );
}
