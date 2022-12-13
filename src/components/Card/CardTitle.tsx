import React from 'react';
import clsx from 'clsx';

export interface CardTitleProps {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
  children?: React.ReactNode;
}

export const CardTitle = (props: CardTitleProps) => {
  const { className, title, subtitle, center, children, ...other } = props;
  return (
    <div className={clsx('CardTitle', { 'CardTitle--center': center }, className)} {...other}>
      {title && <h5 className="CardTitle-title">{title}</h5>}
      {children && typeof children === 'string' && <h5 className="CardTitle-title">{children}</h5>}
      {subtitle && <p className="CardTitle-subtitle">{subtitle}</p>}
      {children && typeof children !== 'string' && children}
    </div>
  );
};
