import React from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';
import { Image } from '../Image';

export type EmptyProps = {
  className?: string;
  type?: 'error' | 'default';
  image?: string;
  tip?: string;
  desc?: string;
  children?: React.ReactNode;
};

const IMAGE_EMPTY =
  'https://gw.alicdn.com/imgextra/i3/O1CN01c0BqGH1Jx6L1ihheM_!!6000000001094-55-tps-280-280.svg';
const IMAGE_OOPS =
  'https://gw.alicdn.com/imgextra/i3/O1CN011bYju01hGYK2LMydz_!!6000000004250-55-tps-280-280.svg';

export const Empty = (props: EmptyProps) => {
  const { className, type, image, tip, desc, children } = props;
  const imgUrl = image || (type === 'error' ? IMAGE_OOPS : IMAGE_EMPTY);

  return (
    <Flex className={clsx('Empty', className)} direction="column" center>
      <Image className="Empty-img" src={imgUrl} />
      {tip && <h5 className="Empty-tip">{tip}</h5>}
      {desc && <p className="Empty-desc">{desc}</p>}
      {children}
    </Flex>
  );
};
