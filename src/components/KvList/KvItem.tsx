import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Flex, FlexItem } from '../Flex';
import type { TextProps } from '../Text';

export interface KvItemProps {
  className?: string;
  title: string;
  level?: number;
  desc?: string;
  highlight?: boolean;
  ellipsis?: TextProps['truncate'];
  rightIcon?: string;
  onClick?: (event: React.MouseEvent) => void;
  children: React.ReactNode;
}

export const KvItem = (props: KvItemProps) => {
  const {
    className,
    title,
    level,
    highlight,
    desc,
    onClick,
    ellipsis = !!onClick,
    rightIcon = onClick ? 'chevron-right' : undefined,
    children,
    ...other
  } = props;

  const isString = typeof children === 'string';

  return (
    <div
      className={clsx('KvItem', className)}
      data-level={level}
      data-highlight={highlight}
      onClick={onClick}
      role="item"
      {...other}
    >
      <Flex className="KvItem-content" alignItems={ellipsis ? 'center' : undefined}>
        <Text className="KvItem-title" truncate>
          {title}
        </Text>
        <FlexItem className="KvItem-main">
          {isString ? <Text truncate={ellipsis}>{children}</Text> : children}
        </FlexItem>
        {rightIcon && <Icon type={rightIcon} />}
      </Flex>
      {desc && <div className="KvItem-desc">{desc}</div>}
    </div>
  );
};
