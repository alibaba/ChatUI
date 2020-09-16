import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { IconButton } from '..';

afterEach(cleanup);

describe('<IconButton />', () => {
  it('should render the icon', () => {
    const { getByTestId } = render(<IconButton icon="foo" data-testid="btn" />);
    const btn = getByTestId('btn');

    expect(btn?.querySelector('use')).toHaveAttribute('xlink:href', '#icon-foo');
  });

  it('should have a custom className', () => {
    const { getByTestId } = render(
      <IconButton icon="foo" className="testName" data-testid="btn" />,
    );
    const btn = getByTestId('btn');

    expect(btn).toHaveClass('testName');
  });
});
