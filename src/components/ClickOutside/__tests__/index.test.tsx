import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { ClickOutside } from '..';

afterEach(cleanup);

describe('<ClickOutside />', () => {
  it('should render the children', () => {
    const { getByTestId } = render(
      <ClickOutside data-testid="wrap" onClick={() => {}}>
        <span data-testid="inside" />
      </ClickOutside>,
    );
    const wrap = getByTestId('wrap');
    const inside = getByTestId('inside');

    expect(wrap).toContainElement(inside);
  });

  it('should be called when clicking away', (done) => {
    const cb = jest.fn();
    const handleClick = () => {
      cb();
      done();
    };

    const { container } = render(
      <ClickOutside onClick={handleClick}>
        <span />
      </ClickOutside>,
    );

    fireEvent.mouseUp(container);
    expect(cb).toHaveBeenCalled();
  });

  it('should not be called when clicking inside', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <ClickOutside onClick={() => {}}>
        <span data-testid="inside" />
      </ClickOutside>,
    );
    const inside = getByTestId('inside');

    fireEvent.click(inside);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
