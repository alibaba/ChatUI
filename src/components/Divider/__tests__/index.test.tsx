import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Divider } from '..';

afterEach(cleanup);

describe('<Divider />', () => {
  it('should render the children', () => {
    const { getByTestId } = render(
      <Divider data-testid="wrap">
        <span data-testid="inside" />
      </Divider>,
    );
    const wrap = getByTestId('wrap');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });

  it('should apply position class', () => {
    const { getByTestId } = render(
      <Divider data-testid="wrap" position="center">
        testText
      </Divider>,
    );
    const wrap = getByTestId('wrap');

    expect(wrap).toHaveClass('Divider--text-center');
  });
});
