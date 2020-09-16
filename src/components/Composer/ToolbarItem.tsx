import React from 'react';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { ToolbarItemProps } from '../Toolbar';

type IToolbarItem = {
  item: ToolbarItemProps;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ToolbarItem: React.FC<IToolbarItem> = (props) => {
  const { item, onClick } = props;

  if (item.img) {
    return (
      <Button className="IconBtn" data-tooltip aria-label={item.title} onClick={onClick}>
        <img src={item.img} alt="" />
      </Button>
    );
  }

  return (
    <IconButton
      icon={item.icon!}
      data-icon={item.icon}
      data-tooltip
      aria-label={item.title}
      onClick={onClick}
    />
  );
};
