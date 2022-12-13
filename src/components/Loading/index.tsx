import React from 'react';
import { Flex } from '../Flex';
import { Icon } from '../Icon';

export interface LoadingProps {
  tip?: string;
  children?: React.ReactNode;
}

export const Loading = (props: LoadingProps) => {
  const { tip, children } = props;
  return (
    <Flex className="Loading" center>
      <Icon type="spinner" spin />
      {tip && <p className="Loading-tip">{tip}</p>}
      {children}
    </Flex>
  );
};
