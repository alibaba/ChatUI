import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export type ButtonVariant = 'text' | 'float';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  color?: 'primary';
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  icon?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function composeClass(type?: string) {
  return type && `Btn--${type}`;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    label,
    color,
    variant,
    size,
    loading = false,
    block,
    disabled = false,
    children,
    onClick,
    ...other
  } = props;

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
      {...other}
    >
      {loading && (
        <span className="Btn-icon">
          <Icon type="spinner" spin />
        </span>
      )}
      {label || children}
    </button>
  );
};
