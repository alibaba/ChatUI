import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RichText, RichTextProps } from '../../src';

export default {
  title: 'RichText',
  component: RichText,
} as Meta;

const Template: Story<RichTextProps> = (args) => <RichText {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: '<h1>rich</h1>',
};

export const Anchor = () => {
  const content = `
    <div>
      <p>Link to <a href="http://chatui.io/">ChatUI1</a></p>
      <p>Link to <a href="http://chatui.io/" target="_blank">ChatUI2</a> (new window)</p>
    </div>
  `;
  return <RichText content={content} />;
};
