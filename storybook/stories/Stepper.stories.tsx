import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Stepper, Step, StepperProps } from '../../src';
import '../../src/styles/index.less';

export default {
  title: 'Stepper',
  component: Stepper,
  argTypes: {
    current: { control: 'number' },
  },
} as Meta;

export const Empty: Story<StepperProps> = (args) => <Stepper {...args} />;

export const ManyItems = (args: StepperProps) => {
  return (
    <Stepper {...args}>
      <Step title="买家申请退款退货" desc="昨天 12:00" />
      <Step title="卖家处理申请" desc="卖家还有22小时22分22秒处理" />
      <Step title="买家填写退货并填写物流信息" desc="昨天 15:00" />
      <Step title="卖家确认收货并退款" desc="昨天 16:00" />
      <Step title="退款成功" />
    </Stepper>
  );
};
