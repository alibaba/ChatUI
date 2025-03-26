import React from 'react';
import clsx from 'clsx';

export type IconProps = React.SVGProps<SVGSVGElement> & {
  type: string;
  className?: string;
  name?: string;
  spin?: boolean;
};

export const Icon: React.FC<IconProps> = (props) => {
  const { type, className, spin, name, ...other } = props;
  const ariaProps = typeof name === 'string' ? { 'aria-label': name } : { 'aria-hidden': true };

  return (
    <svg className={clsx('Icon', { 'is-spin': spin }, className)} {...ariaProps} {...other}>
      <use xlinkHref={`#icon-${type}`} />
    </svg>
  );
};
