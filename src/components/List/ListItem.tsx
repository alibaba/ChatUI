import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

interface ListItemPropsBase {
  className?: string;
  as?: React.ElementType;
  content?: React.ReactNode;
  rightIcon?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

interface ListItemPropsWithLink extends ListItemPropsBase {
  as: 'a';
  href: string;
}

export type ListItemProps = ListItemPropsBase | ListItemPropsWithLink;

export const ListItem = (props: ListItemProps) => {
  const { className, as: Element = 'div', content, rightIcon, children, onClick, ...other } = props;
  return (
    <Element className={clsx('ListItem', className)} onClick={onClick} role="listitem" {...other}>
      <div className="ListItem-content">{content || children}</div>
      {rightIcon && <Icon type={rightIcon} />}
    </Element>
  );
};
