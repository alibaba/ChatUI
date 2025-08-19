import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Flex, FlexItem } from '../Flex';

export interface TipsProps {
  className?: string;
  size?: 'md' | 'lg';
  primary?: boolean;
  icon?: string;
  children?: React.ReactNode;
}

export const Tips = ({
  className,
  size,
  primary,
  icon = 'info-circle',
  children,
}: TipsProps) => {
  return (
    <Flex className={clsx('Tips', className)} data-size={size} data-primary={primary}>
      {icon && <Icon type={icon} />}
      <FlexItem>
        <div className="Tips-content">{children}</div>
      </FlexItem>
    </Flex>
  );
};
