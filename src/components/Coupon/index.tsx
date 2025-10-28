import React from 'react';
import clsx from 'clsx';
import { Price } from '../Price';
import { Button } from '../Button';
import { Flex, FlexItem } from '../Flex';
import { Text } from '../Text';
import { StatusBadge } from '../StatusBadge';
import { formatExpireTime } from '../../utils/date';

type CouponStatus = 'normal' | 'nearExpired' | 'expired' | 'used';

export interface CouponProps {
  className?: string;
  /* 标题 */
  name: string;
  /* 金额 */
  value?: number;
  /* 折扣 */
  discount?: number;
  /* 满减条件 */
  condition?: string;
  /* 失效日期 (时间戳) */
  endAt?: number;
  /* 有效期信息 */
  dateDesc?: React.ReactNode;
  /* 描述信息 */
  desc?: React.ReactNode;
  /* 状态 */
  status?: CouponStatus;
  /* 是否在列表中 */
  inList?: boolean;
  /* 按钮文本 */
  btnText?: string;
  onClick?: (e: React.MouseEvent) => void;
  // children?: React.ReactNode;
}

const statusLabelMap: Record<CouponStatus, string> = {
  normal: '',
  nearExpired: '快失效',
  expired: '已过期',
  used: '已使用',
};

export const Coupon = (props: CouponProps) => {
  const {
    className,
    value,
    discount,
    condition,
    name,
    endAt,
    dateDesc,
    desc,
    status = 'normal',
    inList = false,
    btnText = '查看',
    onClick,
  } = props;

  const statusLabel = statusLabelMap[status] || '';

  return (
    <Flex
      className={clsx('Coupon', className)}
      data-status={status}
      data-in-list={inList}
      onClick={inList ? undefined : onClick}
    >
      <Flex className="Coupon-object" center direction="column">
        {
          value
            ? <Price className="Coupon-value" price={value} currency="¥" autoFit />
            : (
              discount
                ? (
                  <div className="Coupon-discount Price" data-size="xl">
                    <span className="Price-integer">{discount}</span>
                    <span className="Coupon-discount-suffix">折</span>
                  </div>
                )
                : null
            )
        }
        <Text className="Coupon-condition" truncate>
          {condition}
        </Text>
      </Flex>
      <div className="Coupon-divider" />
      <FlexItem className="Coupon-main">
        <Text className="Coupon-name" truncate>
          {name}
        </Text>
        {dateDesc ? (
          <Text className="Coupon-desc" truncate>
            {dateDesc}
          </Text>
        ) : endAt ? (
          <Text className="Coupon-desc" truncate>
            {formatExpireTime(endAt)}
          </Text>
        ) : null}
        <Text className="Coupon-desc" truncate>
          {desc}
        </Text>
      </FlexItem>
      {onClick && (
        <Flex className="Coupon-actions" center>
          <Button className="Coupon-btn" onClick={inList ? onClick : undefined}>
            {btnText}
          </Button>
        </Flex>
      )}
      {statusLabel && <StatusBadge text={statusLabel} />}
    </Flex>
  );
};
