import React from 'react';
import clsx from 'clsx';
import { Flex, FlexItem } from '../Flex';
import { Text } from '../Text';
import { Price } from '../Price';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { IconButton, IconButtonProps } from '../IconButton';
import { Button, ButtonProps } from '../Button';
import { useConfig } from '../ConfigProvider';

type TagProps = {
  name: string;
};

type GoodsVariant = 'normal' | 'inList' | 'compact';

export type GoodsRef = HTMLDivElement;

export interface GoodsProps extends React.HTMLAttributes<GoodsRef> {
  className?: string;
  type?: 'goods' | 'order';
  img?: string;
  name: string;
  desc?: React.ReactNode;
  tags?: TagProps[];
  locale?: string;
  currency?: string;
  price?: number;
  originalPrice?: number;
  meta?: React.ReactNode;
  count?: number;
  unit?: string;
  status?: string;
  variant?: GoodsVariant;
  action?: ButtonProps | IconButtonProps;
  elderMode?: boolean;
  asideContent?: React.ReactNode;
  children?: React.ReactNode;
}

export const Goods = React.forwardRef<GoodsRef, GoodsProps>((props, ref) => {
  const configCtx = useConfig();

  const {
    // 通用
    className,
    type,
    img,
    name,
    desc,
    tags = [],
    locale,
    currency,
    price,
    count,
    unit,
    action,
    elderMode: oElderMode,
    variant,
    children,

    // 商品
    originalPrice,
    meta,

    // 订单
    status,
    asideContent,
    ...other
  } = props;

  const elderMode = oElderMode || configCtx.elderMode;
  const isOrder = type === 'order' && !elderMode;
  const isGoods = type !== 'order' && !elderMode;
  const isInList = variant === 'inList';

  const priceProps = { currency, locale };
  const priceCont = price != null && <Price price={price} {...priceProps} />;

  const countUnit = (
    <div className="Goods-countUnit">
      {count && (
        <span className="Goods-count">
          &times;
          {count}
        </span>
      )}
      {unit && <span className="Goods-unit">{unit}</span>}
    </div>
  );

  const statusCont = status ? (
    <span className="Goods-status">
      {status}
      {other.onClick && !isInList && <Icon type="chevron-right" />}
    </span>
  ) : null;

  const actionCont = action ? <Button size="sm" {...action} /> : null;

  return (
    <Flex
      className={clsx('Goods', className)}
      data-type={type}
      data-elder-mode={elderMode}
      data-variant={variant}
      ref={ref}
      {...other}
    >
      {img && <img className="Goods-img" src={img} alt={name} />}
      <FlexItem>
        <Flex>
          <FlexItem className="Goods-main">
            {isGoods && action && <IconButton className="Goods-buyBtn" icon="cart" {...action} />}
            <Text
              as="h4"
              /**
               * 名称行数规则：
               * 1. 有 desc，单行
               * 2. 无 desc，2行
               */
              truncate={isOrder && !desc ? 2 : true}
              className="Goods-name"
            >
              {name}
            </Text>
            {desc && (
              /**
               * 行数规则：
               * 1. 订单，无状态，订单列表中，2行
               * 2. 其它，单行
               */
              <Text className="Goods-desc" truncate={(isOrder && !status && isInList) ? 2 : true}>
                {desc}
              </Text>
            )}
            {elderMode ? (
              <Flex alignItems="center" justifyContent="space-between">
                {priceCont}
                {actionCont}
              </Flex>
            ) : (
              tags.length > 0 && (
                <div className="Goods-tags">
                  {tags.map((t) => (
                    <Tag color="primary" key={t.name}>
                      {t.name}
                    </Tag>
                  ))}
                </div>
              )
            )}
            {isGoods && (
              <Flex alignItems="flex-end">
                <FlexItem>
                  {priceCont}
                  {originalPrice && <Price price={originalPrice} original {...priceProps} />}
                  {meta && <span className="Goods-meta">{meta}</span>}
                </FlexItem>
                {countUnit}
              </Flex>
            )}
          </FlexItem>
          {isOrder && (
            <div className="Goods-aside">
              {priceCont}
              {countUnit}
              {asideContent && <div className="Goods-slot">{asideContent}</div>}
              {actionCont}
            </div>
          )}
        </Flex>
        {isInList && statusCont}
        {children && <div className="Goods-slot">{children}</div>}
        {!isInList && statusCont}
      </FlexItem>
    </Flex>
  );
});
