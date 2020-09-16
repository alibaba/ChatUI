import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export type ListItemProps = {
  className?: string;
  as?: React.ElementType;
  content?: React.ReactNode;
  rightIcon?: string;
  onClick?: (event: React.MouseEvent) => void;
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const { className, as: Element = 'div', content, rightIcon, children, onClick, ...other } = props;
  return (
    <Element className={clsx('ListItem', className)} onClick={onClick} role="listitem" {...other}>
      <div className="ListItem-content">{content || children}</div>
      {rightIcon && <Icon type={rightIcon} />}
    </Element>
  );
};
