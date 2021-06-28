import React from 'react';
import clsx from 'clsx';
import { InputVariant } from '../Input';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder?: string;
  variant?: InputVariant;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, placeholder, variant = 'outline', children, ...rest }, ref) => (
    <select className={clsx('Input Select', `Input--${variant}`, className)} {...rest} ref={ref}>
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  ),
);
