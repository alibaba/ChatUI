import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '../IconButton';

export type NavbarProps = {
  title: string;
  className?: string;
  logo?: string;
  leftContent?: IconButtonProps;
  rightContent?: IconButtonProps[];
  rightSlot?: React.ReactNode;
  desc?: React.ReactNode;
  align?: 'left' | 'center';
};

export const Navbar = (props: NavbarProps) => {
  const { className, title, logo, desc, leftContent, rightContent = [], rightSlot, align } = props;

  const isLeft = align === 'left';
  const showTitle = isLeft ? true : !logo;

  return (
    <header className={clsx('Navbar', { 'Navbar--left': isLeft }, className)}>
      <div className="Navbar-left">{leftContent && <IconButton size="lg" {...leftContent} />}</div>
      <div className="Navbar-main">
        {logo && (
          <div className="Navbar-brand">
            <img className="Navbar-logo" src={logo} alt={title} />
          </div>
        )}
        <div className="Navbar-inner">
          {showTitle && <h2 className="Navbar-title">{title}</h2>}
          <div className="Navbar-desc">{desc}</div>
        </div>
      </div>
      <div className="Navbar-right">
        <div className="Navbar-rightSlot">{rightSlot}</div>
        {rightContent.map((item) => (
          <IconButton size="lg" key={item.icon} {...item} />
        ))}
      </div>
    </header>
  );
};
