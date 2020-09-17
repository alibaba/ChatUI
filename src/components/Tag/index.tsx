import React from 'react';
import clsx from 'clsx';

export interface TagProps {
  as?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
}

type TagRef = React.ElementType;

export const Tag = React.forwardRef<TagRef, TagProps>((props, ref) => {
  const { as: Element = 'span', className, children, ...other } = props;

  return (
    <Element className={clsx('Tag', className)} ref={ref} {...other}>
      {children}
    </Element>
  );
});
