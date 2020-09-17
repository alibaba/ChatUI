import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar, AvatarProps } from '../../src';
import '../../src/components/Avatar/style.less';

export default {
  title: 'Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg',
  alt: 'name',
};
