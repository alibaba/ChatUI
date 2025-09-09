import React from 'react';
import clsx from 'clsx';
import { Goods, GoodsProps } from '../Goods';
import { Flex, FlexItem } from '../Flex';
import { ImageList } from '../ImageList';
import { Icon } from '../Icon';

export type OrderObjectProps = {
  className?: string;
  title?: string;
  list: GoodsProps[];
  count?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const OrderObject = (props: OrderObjectProps) => {
  const { className, title, list = [], count = list.length, onClick } = props;

  const firstOrder = list[0];

  return (
    <div className={clsx('OrderObject', className)} onClick={onClick}>
      {title && <div className="OrderObject-title">{title}</div>}
      {count > 1 ? (
        <Flex alignItems="center">
          <FlexItem>
            <ImageList list={list.slice(0, 3).map((t) => ({ src: t.img! }))} />
          </FlexItem>
          <div className="OrderObject-count">{`共${count}件`}</div>
          <Icon type="chevron-right" />
        </Flex>
      ) : (
        <Goods type="order" variant="compact" {...firstOrder} />
      )}
    </div>
  );
};
