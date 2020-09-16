import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Icon } from '..';

afterEach(cleanup);

describe('<Icon />', () => {
  it('should render the icon', () => {
    const { getByTestId } = render(<Icon type="foo" data-testid="icon" />);
    const icon = getByTestId('icon');

    expect(icon?.querySelector('use')).toHaveAttribute('xlink:href', '#icon-foo');
  });

  it('should have spin class', () => {
    const { getByTestId } = render(<Icon type="foo" spin data-testid="icon" />);
    const icon = getByTestId('icon');

    expect(icon).toHaveClass('is-spin');
  });

  it('should have a custom className', () => {
    const { getByTestId } = render(<Icon type="foo" className="testName" data-testid="icon" />);
    const icon = getByTestId('icon');

    expect(icon).toHaveClass('testName');
  });

  it('should have a custom style', () => {
    const { getByTestId } = render(
      <Icon type="foo" style={{ fontSize: '12px' }} data-testid="icon" />,
    );
    const icon = getByTestId('icon');

    expect(icon).toHaveStyle({ fontSize: '12px' });
  });

  it('should render the name', () => {
    const { getByTestId } = render(<Icon type="foo" name="testName" data-testid="icon" />);
    const icon = getByTestId('icon');

    expect(icon).toHaveAttribute('aria-label', 'testName');
  });
});
