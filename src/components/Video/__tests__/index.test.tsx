import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Video } from '..';

afterEach(cleanup);

describe('<Video />', () => {

  it('should support video cover', () => {
    const { container } = render(<Video
      src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
      cover="//img.alicdn.com/tfs/TB1_JY7tYj1gK0jSZFOXXc7GpXa-620-320.jpg"
    />);
    expect(container.querySelectorAll('.Video-cover').length).toBe(1);
  });

  it('should support video duration', () => {
    const { container } = render(<Video
      src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
      cover="//img.alicdn.com/tfs/TB1_JY7tYj1gK0jSZFOXXc7GpXa-620-320.jpg"
      duration={20}
    />);
    expect(container.querySelectorAll('.Video-duration').length).toBe(1);
  });

  it('should support onClick', () => {
    // mock play to prevent Error: Not implemented: HTMLMediaElement.prototype.play
    window.HTMLMediaElement.prototype.play = () => new Promise(() => {});
    const onClick = jest.fn();
    const { container } = render(<Video
      src="//cloud.video.taobao.com/play/u/3544775890/p/1/e/6/t/1/277895493609.mp4"
      cover="//img.alicdn.com/tfs/TB1_JY7tYj1gK0jSZFOXXc7GpXa-620-320.jpg"
      duration={20}
      onClick={onClick}
    />);
    
    fireEvent(container.querySelectorAll('.Video-playBtn')[0], new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(onClick).toBeCalledTimes(1)
  });
});
