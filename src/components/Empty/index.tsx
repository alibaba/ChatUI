import React from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';

export interface EmptyProps {
  className?: string;
  type?: 'error' | 'default';
  image?: string;
  tip?: string;
  children?: React.ReactNode;
}

const IMAGE_EMPTY = '//gw.alicdn.com/tfs/TB1fnnLRkvoK1RjSZFDXXXY3pXa-300-250.svg';
const IMAGE_OOPS = '//gw.alicdn.com/tfs/TB1lRjJRbvpK1RjSZPiXXbmwXXa-300-250.svg';

export const Empty = (props: EmptyProps) => {
  const { className, type, image, tip, children } = props;
  const imgUrl = image || (type === 'error' ? IMAGE_OOPS : IMAGE_EMPTY);

  return (
    <Flex className={clsx('Empty', className)} direction="column" center>
      <img className="Empty-img" src={imgUrl} alt={tip} />
      {tip && <p className="Empty-tip">{tip}</p>}
      {children}
    </Flex>
  );
};
