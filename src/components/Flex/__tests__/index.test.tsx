import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Flex } from '..';

afterEach(cleanup);

describe('<Empty />', () => {
  it('should render the children', () => {
    const { getByTestId } = render(
      <Flex data-testid="wrap">
        <span data-testid="inside" />
      </Flex>,
    );
    const wrap = getByTestId('wrap');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });

  it('should apply direction class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" direction="row" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--d-r');
  });

  it('should apply justify class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" justify="center" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--jc-c');
  });

  it('should apply wrap class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" align="flex-end" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--ai-fe');
  });

  it('should apply wrap class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" wrap="wrap" />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--w-w');
  });

  it('should apply inline class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" inline />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--inline');
  });

  it('should apply center class', () => {
    const { getByTestId } = render(<Flex data-testid="wrap" center />);
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Flex--center');
  });
});
