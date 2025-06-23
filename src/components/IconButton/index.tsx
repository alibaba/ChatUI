import React from 'react';
import clsx from 'clsx';
import { Button, ButtonProps } from '../Button';
import { Icon } from '../Icon';

export interface IconButtonProps extends ButtonProps {
  img?: string;
}

export const IconButton = (props: IconButtonProps) => {
  const { className, icon, img, ...other } = props;
  return (
    <Button className={clsx('IconBtn', className)} data-icon={icon} {...other}>
      {icon && <Icon type={icon} />}
      {!icon && img && <img src={img} alt="" />}
    </Button>
  );
};
