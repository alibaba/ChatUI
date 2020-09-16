import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FlexItem } from '..';

afterEach(cleanup);

describe('<Empty />', () => {
  it('should render the children', () => {
    const { getByTestId } = render(
      <FlexItem data-testid="wrap">
        <span data-testid="inside" />
      </FlexItem>,
    );
    const wrap = getByTestId('wrap');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });

  it('should render the flex style', () => {
    const { getByTestId } = render(<FlexItem data-testid="wrap" flex="1" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveStyle({ flex: '1' });
  });

  it('should render the alignSelf style', () => {
    const { getByTestId } = render(<FlexItem data-testid="wrap" alignSelf="flex-start" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveStyle({ alignSelf: 'flex-start' });
  });

  it('should render the order style', () => {
    const { getByTestId } = render(<FlexItem data-testid="wrap" order={1} />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveStyle({ order: '1' });
  });

  it('should have a custom className', () => {
    const { getByTestId } = render(<FlexItem data-testid="wrap" className="testClass" />);
    expect(getByTestId('wrap')).toHaveClass('testClass');
  });
});
