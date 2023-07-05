import React from 'react';
import clsx from 'clsx';

export type TreeProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Tree = React.forwardRef<HTMLDivElement, TreeProps>((props, ref) => {
  const { className, children } = props;
  return (
    <div className={clsx('Tree', className)} role="tree" ref={ref}>
      {children}
    </div>
  );
});
