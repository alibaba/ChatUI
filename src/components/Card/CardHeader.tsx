import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { Text } from '../Text';
import { Flex, FlexItem } from '../Flex';
import { Image } from '../Image';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  icon?: string;
  iconColor?: React.CSSProperties['color'];
  logo?: string;
  title?: string;
  desc?: string;
  hasBg?: boolean;
  badge?: string;
  children?: React.ReactNode;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { className, icon, iconColor, logo, title, desc, hasBg, badge, children, ...other } = props;

  return (
    <Flex className={clsx('CardHeader', className)} data-has-bg={!!hasBg} {...other}>
      {icon &&
        (icon.includes('//') ? (
          <Image className="CardHeader-icon" src={icon} />
        ) : (
          <Icon className="CardHeader-icon" style={{ color: iconColor }} type={icon} />
        ))}
      <FlexItem>
        {logo ? (
          <Image className="CardHeader-logo" src={logo} />
        ) : (
          <Text as="h4" className="CardHeader-title" truncate={2}>
            {title}
          </Text>
        )}
        {desc && (
          <Text as="h5" className="CardHeader-desc" truncate>
            {desc}
          </Text>
        )}
      </FlexItem>
      {badge ? (
        <div className="CardHeader-badge" style={{ backgroundImage: `url(${badge})` }} />
      ) : (
        children && <div className="CardHeader-slot">{children}</div>
      )}
    </Flex>
  );
};
