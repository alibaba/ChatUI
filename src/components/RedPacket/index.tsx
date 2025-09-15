import React from 'react';
import clsx from 'clsx';
import { Price } from '../Price';
import { Button } from '../Button';
import { Flex, FlexItem } from '../Flex';
import { Text } from '../Text';
import { Countdown } from '../Countdown';
import { StatusBadge } from '../StatusBadge';
import { Image } from '../Image';
import { isWithin24Hours, formatExpireTime } from '../../utils/date';

type RedPacketStatus = 'normal' | 'nearExpired' | 'expired' | 'used';

export interface RedPacketProps {
  className?: string;
  /* 标题 */
  name: string;
  /* 金额 */
  value?: number;
  /* 满减条件 */
  condition?: string;
  /* 失效日期 (时间戳) */
  endAt?: number;
  /* 有效期信息 */
  dateDesc?: string;
  /* 描述信息 */
  desc?: React.ReactNode;
  /* 主图 */
  image?: string;
  /* 是否显示倒计时 */
  showCountdown?: 'auto' | boolean;
  /* 状态 */
  status?: RedPacketStatus;
  /* 标签 */
  tag?: string;
  /* 是否在列表中 */
  inList?: boolean;
  /* 变体 */
  variant?: 'redPacket' | 'cash' | 'image';
  /* 按钮文本 */
  btnText?: string;
  onClick?: (e: React.MouseEvent) => void;
  // children?: React.ReactNode;
}

const statusLabelMap: Record<RedPacketStatus, string> = {
  normal: '',
  nearExpired: '快失效',
  expired: '已过期',
  used: '已使用',
};

export const RedPacket = (props: RedPacketProps) => {
  const {
    className,
    value,
    condition,
    name,
    endAt,
    dateDesc,
    desc,
    status = 'normal',
    variant = 'redPacket',
    tag,
    image,
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
      className={clsx('RedPacket', className)}
      data-variant={variant}
      data-status={status}
      data-in-list={inList}
      onClick={inList ? undefined : onClick}
    >
      <Flex className="RedPacket-object" center direction="column">
        {image ? (
          <Image className="RedPacket-img" src={image} width="70" height="53" />
        ) : (
          <>
            {value && <Price className="RedPacket-value" price={value} currency="¥" autoFit />}
            <Text className="RedPacket-condition" truncate>
              {condition}
            </Text>
          </>
        )}
        <svg className="RedPacket-arc" width="12" height="80" viewBox="0 0 24 160" fill="none">
          <path
            fill="var(--red-packet-arc-color)"
            d="M0 160h24V0H.4C6.77 20.445 10.7 48.462 10.7 79.369 10.701 110.917 6.607 139.454 0 160"
          />
        </svg>
      </Flex>
      <FlexItem className="RedPacket-main">
        <Text className="RedPacket-name" truncate>
          {name}
        </Text>
        {dateDesc ? (
          <Text className="RedPacket-desc" truncate>
            {dateDesc}
          </Text>
        ) : endAt ? (
          <Text className="RedPacket-desc" truncate>
            {showCountdown ? (
              <>
                <span>限时</span> <Countdown targetDate={endAt} />
              </>
            ) : (
              formatExpireTime(endAt)
            )}
          </Text>
        ) : null}
        <Text className="RedPacket-desc" truncate>
          {desc}
        </Text>
      </FlexItem>
      {onClick && (
        <Flex className="RedPacket-actions" center>
          <Button className="RedPacket-btn" onClick={inList ? onClick : undefined}>
            {btnText}
          </Button>
        </Flex>
      )}
      {statusLabel && <StatusBadge text={statusLabel} />}
      {tag && <div className="RedPacket-tag">{tag}</div>}
    </Flex>
  );
};
