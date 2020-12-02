import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { List, ListItem, ListProps, ListItemProps } from '../../src';
import '../../src/styles/index.less';

export default {
  title: 'List',
  component: List,
  argTypes: {
    bordered: { control: 'boolean' },
  },
} as Meta;

export const Empty: Story<ListProps> = (args) => <List {...args} />;

export const ManyItems = (args: ListProps) => {
  return (
    <List {...args}>
      <ListItem content="item-1" />
      <ListItem content="item-2" />
      <ListItem content="item-3" />
    </List>
  );
};
