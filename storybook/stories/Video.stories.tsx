import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Video, VideoProps } from '../../src';
// import '../../src/components/Video/style.less';

export default {
  title: 'Video',
  component: Video,
} as Meta;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '//interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  alt: 'flower',
  style: {
    width: '320px'
  }
};
