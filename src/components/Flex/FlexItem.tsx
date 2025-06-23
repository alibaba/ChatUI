import React from 'react';
import clsx from 'clsx';

export interface FlexItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  flex?: string;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  order?: number;
}

export const FlexItem = (props: FlexItemProps) => {
  const { className, flex, alignSelf, order, style, children, ...other } = props;
  return (
    <div
      className={clsx('FlexItem', className)}
      style={{
        ...style,
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
