import React from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';

export interface QuickReplyItemProps {
  name: string;
  icon?: string;
  img?: string;
  isNew?: boolean;
  isHighlight?: boolean;
}

export interface QuickReplyProps {
  item: QuickReplyItemProps;
  index: number;
  onClick: (item: QuickReplyItemProps, index: number) => void;
}

export const QuickReply = (props: QuickReplyProps) => {
  const { item, index, onClick } = props;
  return (
    <button
      className={clsx('QuickReply', {
        new: item.isNew,
        highlight: item.isHighlight,
      })}
      type="button"
      onClick={() => onClick(item, index)}
      aria-label={`快捷短语: ${item.name}，双击发送`}
    >
      <div className="QuickReply-inner">
        {item.icon && <Icon type={item.icon} />}
        {item.img && <img className="QuickReply-img" src={item.img} alt="" />}
        <span>{item.name}</span>
      </div>
    </button>
  );
};
