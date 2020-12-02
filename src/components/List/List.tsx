import React from 'react';
import clsx from 'clsx';

export type ListProps = {
  className?: string;
  bordered?: boolean;
};

export const List: React.FC<ListProps> = (props) => {
  const { bordered = false, className, children } = props;
  return (
    <div className={clsx('List', { 'List--bordered': bordered }, className)} role="list">
      {children}
    </div>
  );
};
