import React from 'react';
import clsx from 'clsx';
import { Price } from '../Price';
import { Button } from '../Button';
import { Flex, FlexItem } from '../Flex';
import { Text } from '../Text';
import { Countdown } from '../Countdown';
import { StatusBadge } from '../StatusBadge';
import { isWithin24Hours, formatExpireTime } from '../../utils/date';

type CouponStatus = 'normal' | 'nearExpired' | 'expired' | 'used';

export interface CouponProps {
  className?: string;
  /* 标题 */
  name: string;
  /* 金额 */
  value?: number;
  /* 满减条件 */
  condition?: string;
  /* 失效日期 (时间戳) */
  endAt?: number;
  /* 描述信息 */
  desc?: string;
  /* 是否显示倒计时 */
  showCountdown?: 'auto' | boolean;
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
    condition,
    name,
    endAt,
    desc,
    status = 'normal',
    showCountdown: oShowCountdown,
    inList = false,
    btnText = '查看',
    onClick,
  } = props;

  const statusLabel = statusLabelMap[status] || '';
  const nearExpired = status === 'nearExpired' || (endAt && isWithin24Hours(endAt));
  const showCountdown = oShowCountdown === true || (oShowCountdown === 'auto' && nearExpired);

  return (
    <Flex
      className={clsx('Coupon', className)}
      data-status={status}
      data-in-list={inList}
      onClick={inList ? undefined : onClick}
    >
      <Flex className="Coupon-object" center direction="column">
        {value && <Price className="Coupon-value" price={value} currency="¥" autoFit />}
        <Text className="Coupon-condition" truncate>
          {condition}
        </Text>
      </Flex>
      <div className="Coupon-divider" />
      <FlexItem className="Coupon-main">
        <Text className="Coupon-name" truncate>
          {name}
        </Text>
        {endAt && (
          <Text className="Coupon-desc" truncate>
            {showCountdown ? (
              <>
                <span>限时</span> <Countdown targetDate={endAt} />
              </>
            ) : (
              formatExpireTime(endAt)
            )}
          </Text>
        )}
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
