import React from 'react';
import clsx from 'clsx';

export interface TextProps {
  className?: string;
  as?: React.ElementType;
  align?: 'left' | 'center' | 'right' | 'justify';
  breakWord?: boolean;
  truncate?: boolean | number;
}

export const Text: React.FC<TextProps> = (props) => {
  const { as: Element = 'div', className, align, breakWord, truncate, children, ...other } = props;
  const ellipsis = Number.isInteger(truncate);

  const cls = clsx(
    align && `Text--${align}`,
    {
      'Text--break': breakWord,
      'Text--truncate': truncate === true,
      'Text--ellipsis': ellipsis,
    },
    className,
  );

  const style = ellipsis ? { WebkitLineClamp: truncate } : null;

  return (
    <Element className={cls} style={style} {...other}>
      {children}
    </Element>
  );
};
