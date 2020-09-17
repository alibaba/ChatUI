import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { HelpText } from '..';

afterEach(cleanup);

describe('<HelpText />', () => {
  it('should render the children', () => {
    const { container, getByTestId } = render(
      <HelpText>
        <span data-testid="inside" />
      </HelpText>,
    );
    const wrap = container.querySelector('.HelpText');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });
});
