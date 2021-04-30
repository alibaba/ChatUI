import React from 'react';
import clsx from 'clsx';
import { IconButton } from '../IconButton';

export type NavbarProps = {
  title: string;
  className?: string;
  logo?: string;
  leftContent?: {
    icon: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
  rightContent?: {
    type: string;
    icon: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  }[];
};

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className, title, logo, leftContent, rightContent = [] } = props;
  return (
    <header className={clsx('Navbar', className)}>
      <div className="Navbar-left">
        {leftContent && (
          <IconButton size="lg" icon={leftContent.icon} onClick={leftContent.onClick} />
        )}
      </div>
      <div className="Navbar-main">
        {logo ? (
          <img className="Navbar-logo" src={logo} alt={title} />
        ) : (
          <h2 className="Navbar-title">{title}</h2>
        )}
      </div>
      <div className="Navbar-right">
        {rightContent.map((item) => (
          <IconButton size="lg" icon={item.icon} onClick={item.onClick} key={item.type} />
        ))}
      </div>
    </header>
  );
};
