import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export type IconButtonProps = ButtonProps & {
  className?: string;
  icon: string;
};

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, icon, ...other } = props;
  return (
    <Button className={clsx('IconBtn', className)} {...other}>
      <Icon type={icon} />
    </Button>
  );
};
