import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '../IconButton';

export interface NavbarProps {
  title: string;
  className?: string;
  logo?: string;
  leftContent?: IconButtonProps;
  rightContent?: IconButtonProps[];
}

export const Navbar = (props: NavbarProps) => {
  const { className, title, logo, leftContent, rightContent = [] } = props;
  return (
    <header className={clsx('Navbar', className)}>
      <div className="Navbar-left">{leftContent && <IconButton size="lg" {...leftContent} />}</div>
      <div className="Navbar-main">
        {logo ? (
          <img className="Navbar-logo" src={logo} alt={title} />
        ) : (
          <h2 className="Navbar-title">{title}</h2>
        )}
      </div>
      <div className="Navbar-right">
        {rightContent.map((item) => (
          <IconButton size="lg" {...item} key={item.icon} />
        ))}
      </div>
    </header>
  );
};
