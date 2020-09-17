import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Image } from '..';

beforeEach(() => {
  class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
  }

  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: IntersectionObserver,
  });
});

afterEach(cleanup);

const testImg = '//gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg';

describe('<Image />', () => {
  it('should render the image', () => {
    const { getByTestId } = render(<Image src={testImg} data-testid="img" />);
    const img = getByTestId('img');

    expect(img).toHaveAttribute('src', testImg);
  });

  it('should render the alt', () => {
    const { getByTestId } = render(<Image src={testImg} alt="testAlt" data-testid="img" />);
    const img = getByTestId('img');

    expect(img).toHaveAttribute('alt', 'testAlt');
  });

  it('should apply fluid class', () => {
    const { getByTestId } = render(<Image src={testImg} fluid data-testid="img" />);
    const img = getByTestId('img');

    expect(img).toHaveClass('Image--fluid');
  });

  it('should lazy render', () => {
    const { getByTestId } = render(<Image src={testImg} lazy data-testid="img" />);
    const img = getByTestId('img');

    expect(img).toHaveAttribute('src', '');
  });
});
