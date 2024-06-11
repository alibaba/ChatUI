import React from 'react';
import clsx from 'clsx';
import { IconButton, IconButtonProps } from '../IconButton';

export interface NavbarProps {
  title: string;
  className?: string;
  logo?: string;
  leftContent?: IconButtonProps;
  rightContent?: IconButtonProps[];
  desc?: React.ReactNode;
  align?: 'left' | 'center';
}

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>((props, ref) => {
  const { className, title, logo, desc, leftContent, rightContent = [], align } = props;

  const isLeft = align === 'left';
  const showTitle = isLeft ? true : !logo;

  return (
    <header className={clsx('Navbar', { 'Navbar--left': isLeft }, className)} ref={ref}>
      <div className="Navbar-left">{leftContent && <IconButton size="lg" {...leftContent} />}</div>
      <div className="Navbar-main">
        {logo && <img className="Navbar-logo" src={logo} alt={title} />}
        <div className="Navbar-inner">
          {showTitle && <h2 className="Navbar-title">{title}</h2>}
          <div className="Navbar-desc">{desc}</div>
        </div>
      </div>
      <div className="Navbar-right">
        <div className="Navbar-rightSlot" />
        {rightContent.map((item) => (
          <IconButton size="lg" key={item.icon} {...item} />
        ))}
      </div>
    </header>
  );
});
