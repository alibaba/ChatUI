import React from 'react';
import clsx from 'clsx';

export interface TagProps {
  as?: React.ElementType;
  className?: string;
  color?: 'primary' | 'success' | 'danger' | 'warning';
  children?: React.ReactNode;
}

type TagRef = React.ElementType;

export const Tag = React.forwardRef<TagRef, TagProps>((props, ref) => {
  const { as: Element = 'span', className, color, children, ...other } = props;

  return (
    <Element className={clsx('Tag', color && `Tag--${color}`, className)} ref={ref} {...other}>
      {children}
    </Element>
  );
});
