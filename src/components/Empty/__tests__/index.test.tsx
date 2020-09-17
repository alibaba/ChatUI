import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Empty } from '..';

afterEach(cleanup);

const IMAGE_EMPTY = '//gw.alicdn.com/tfs/TB1fnnLRkvoK1RjSZFDXXXY3pXa-300-250.svg';
const IMAGE_OOPS = '//gw.alicdn.com/tfs/TB1lRjJRbvpK1RjSZPiXXbmwXXa-300-250.svg';
const IMAGE_CHATUI = '//gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg';

describe('<Empty />', () => {
  it('should render the children', () => {
    const { container, getByTestId } = render(
      <Empty>
        <span data-testid="inside" />
      </Empty>,
    );
    const wrap = container.querySelector('.Empty');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });

  it('should render the tip', () => {
    const { container } = render(<Empty tip="testTip" />);
    const element = container.querySelector('.Empty-tip');

    expect(element).toHaveTextContent('testTip');
  });

  it('should render image (default)', () => {
    const { container } = render(<Empty />);
    const element = container.querySelector('img');

    expect(element?.getAttribute('src')).toBe(IMAGE_EMPTY);
  });

  it('should render image (error)', () => {
    const { container } = render(<Empty type="error" />);
    const element = container.querySelector('img');

    expect(element?.getAttribute('src')).toBe(IMAGE_OOPS);
  });

  it('should render image (custom)', () => {
    const { container } = render(<Empty image={IMAGE_CHATUI} />);
    const element = container.querySelector('img');

    expect(element?.getAttribute('src')).toBe(IMAGE_CHATUI);
  });
});
