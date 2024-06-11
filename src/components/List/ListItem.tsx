import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Text } from '../Text';

interface ListItemPropsBase {
  className?: string;
  as?: React.ElementType;
  content?: React.ReactNode;
  ellipsis?: boolean;
  rightIcon?: string;
  onClick?: (event: React.MouseEvent) => void;
  children?: React.ReactNode;
}

interface ListItemPropsWithLink extends ListItemPropsBase {
  as: 'a';
  href: string;
}

export type ListItemProps = ListItemPropsBase | ListItemPropsWithLink;

export const ListItem = React.forwardRef<HTMLElement, ListItemProps>((props, ref) => {
  const {
    className,
    as: Element = 'div',
    content,
    ellipsis,
    rightIcon,
    children,
    onClick,
    ...other
  } = props;
  return (
    <Element
      className={clsx('ListItem', className)}
      onClick={onClick}
      role="listitem"
      {...other}
      ref={ref}
    >
      <Text className="ListItem-content" truncate={ellipsis}>
        {content || children}
      </Text>
      {rightIcon && <Icon type={rightIcon} />}
    </Element>
  );
});
