import React from 'react';
import clsx from 'clsx';

export type CardTitleProps = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
};

export const CardTitle: React.FC<CardTitleProps> = (props) => {
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
