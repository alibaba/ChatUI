import React from 'react';
import clsx from 'clsx';
import { RedPacket } from '../RedPacket';

export interface MultiRedPacketProps {
  className?: string;
  name: string;
  count?: number;
  total?: number;
  variant?: 'redPacket' | 'cash';
  btnText?: string;
  onClick?: (e: React.MouseEvent) => void;
}

const imageMap = {
  redPacket: 'https://gw.alicdn.com/imgextra/i2/O1CN01IAmvNz27AIyYyGXL7_!!6000000007756-55-tps-72-72.svg',
  cash: 'https://gw.alicdn.com/imgextra/i4/O1CN01Zgq0Nb281tJdBdhm2_!!6000000007873-55-tps-72-72.svg',
};

export const MultiRedPacket = (props: MultiRedPacketProps) => {
  const { className, name, count, total, variant = 'redPacket', btnText, onClick } = props;

  return (
    <div className={clsx('MultiRedPacket', className)} data-variant={variant}>
      <div className="MultiRedPacket-stack" />
      <RedPacket
        image={imageMap[variant]}
        name={name}
        btnText={btnText}
        desc={
          <div>
            {count && (
              <span>
                <strong>{count}</strong> 个
              </span>
            )}
            {total && (
              <span>
                共 <strong>{total}</strong> 元
              </span>
            )}
          </div>
        }
        onClick={onClick}
      />
    </div>
  );
};
