import React from 'react';
import clsx from 'clsx';

export type FlexItemProps = {
  className?: string;
  flex?: string;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  order?: number;
};

export const FlexItem: React.FC<FlexItemProps> = (props) => {
  const { className, flex, alignSelf, order, children, ...other } = props;
  return (
    <div
      className={clsx('FlexItem', className)}
      style={{
        flex,
        alignSelf,
        order,
      }}
      {...other}
    >
      {children}
    </div>
  );
};
