import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { QuickReply } from '..';

afterEach(cleanup);

describe('<QuickReply />', () => {
  it('should render the name', () => {
    const { container } = render(
      <QuickReply item={{ name: 'testName' }} index={0} onClick={() => {}} />,
    );
    const quickReply = container.querySelector('.QuickReply');

    expect(quickReply).toHaveTextContent('testName');
  });

  it('should render the icon', () => {
    const { container } = render(
      <QuickReply item={{ name: 'testName', icon: 'foo' }} index={0} onClick={() => {}} />,
    );
    const quickReply = container.querySelector('.QuickReply');

    expect(quickReply?.querySelector('use')).toHaveAttribute('xlink:href', '#icon-foo');
  });

  it('should render the image', () => {
    const img = '//gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg';
    const { container } = render(
      <QuickReply
        item={{
          name: 'testName',
          img: img,
        }}
        index={0}
        onClick={() => {}}
      />,
    );
    const quickReply = container.querySelector('.QuickReply');

    expect(quickReply?.querySelector('.QuickReply-img')).toHaveAttribute('src', img);
  });

  it('should have a new style', () => {
    const { container } = render(
      <QuickReply item={{ name: 'testName', isNew: true }} index={0} onClick={() => {}} />,
    );
    const quickReply = container.querySelector('.QuickReply');

    expect(quickReply).toHaveClass('new');
  });

  it('should have a highlight style', () => {
    const { container } = render(
      <QuickReply item={{ name: 'testName', isHighlight: true }} index={0} onClick={() => {}} />,
    );
    const quickReply = container.querySelector('.QuickReply');

    expect(quickReply).toHaveClass('highlight');
  });
});
