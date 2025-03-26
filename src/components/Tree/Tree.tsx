import React from 'react';
import clsx from 'clsx';

export type TreeProps = {
  className?: string;
};

export const Tree: React.FC<TreeProps> = (props) => {
  const { className, children } = props;
  return (
    <div className={clsx('Tree', className)} role="tree">
      {children}
    </div>
  );
};
