import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Tab } from '..';

afterEach(cleanup);

describe('<Tab />', () => {
  it('should render children', () => {
    const { getByTestId } = render(
      <Tab label="">
        <span data-testid="child" />
      </Tab>,
    );

    expect(getByTestId('child')).toBeInTheDocument();
  });
});
