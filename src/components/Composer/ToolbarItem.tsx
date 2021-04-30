import React from 'react';
import { ToolbarItemProps } from '../Toolbar';
import { Action } from './Action';

type IToolbarItem = {
  item: ToolbarItemProps;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ToolbarItem: React.FC<IToolbarItem> = (props) => {
  const { item, onClick } = props;

  return (
    <Action
      icon={item.icon}
      img={item.img}
      data-icon={item.icon}
      data-tooltip={item.title || null}
      aria-label={item.title}
      onClick={onClick}
    />
  );
};
