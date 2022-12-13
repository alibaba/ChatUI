import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  color?: 'primary';
  variant?: 'text' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  block?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function composeClass(type?: string) {
  return type && `Btn--${type}`;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    label,
    color,
    variant,
    size: oSize,
    icon: oIcon,
    loading,
    block,
    disabled,
    children,
    onClick,
    ...other
  } = props;

  const icon = oIcon || (loading && 'spinner');
  const size = oSize || (block ? 'lg' : '');

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  }

  return (
    <button
      className={clsx(
        'Btn',
        composeClass(color),
        composeClass(variant),
        composeClass(size),
        {
          'Btn--block': block,
        },
        className,
      )}
      type="button"
      disabled={disabled}
      onClick={handleClick}
      ref={ref}
      {...other}
    >
      {icon && (
        <span className="Btn-icon">
          <Icon type={icon} spin={loading} />
        </span>
      )}
      {label || children}
    </button>
  );
});
