import React from 'react';
import { ToolbarButton, ToolbarItemProps } from './ToolbarButton';

export interface ToolbarProps {
  items: ToolbarItemProps[];
  onClick: (item: ToolbarItemProps, event: React.MouseEvent) => void;
}

export const Toolbar = (props: ToolbarProps) => {
  const { items, onClick } = props;
  return (
    <div className="Toolbar">
      {items.map((item) => (
        <ToolbarButton item={item} onClick={onClick} key={item.type} />
      ))}
    </div>
  );
};
