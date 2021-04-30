import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export type IconButtonProps = ButtonProps & {
  icon?: string;
  img?: string;
};

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, icon, img, ...other } = props;
  return (
    <Button className={clsx('IconBtn', className)} {...other}>
      {icon && <Icon type={icon} />}
      {!icon && img && <img src={img} alt="" />}
    </Button>
  );
};
