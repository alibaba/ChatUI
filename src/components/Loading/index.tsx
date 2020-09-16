import React from 'react';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export type LoadingProps = {
  tip?: string;
};

export const Loading: React.FC<LoadingProps> = (props) => {
  const { tip, children } = props;
  return (
    <Flex className="Loading" center>
      <Icon type="spinner" spin />
      {tip && <p className="Loading-tip">{tip}</p>}
      {children}
    </Flex>
  );
};
