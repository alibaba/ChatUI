import React from 'react';
import { render, cleanup } from '@testing-library/react';
import toggleClass from '../toggleClass';

afterEach(cleanup);

describe('utils/toggleClass', () => {
  it('should add a class to `body`', () => {
    render(<div />);
    toggleClass('test1', true);

    expect(document.body).toHaveClass('test1');
  });

  it('should add a class', () => {
    const { getByTestId } = render(<div data-testid="foo" />);
    const foo = getByTestId('foo');

    toggleClass('test1', true, foo);

    expect(foo).toHaveClass('test1');
  });

  it('should have the transform style', () => {
    const { getByTestId } = render(<div className="test1 test2" data-testid="foo" />);
    const foo = getByTestId('foo');

    toggleClass('test1', false, foo);

    expect(foo).not.toHaveClass('test1');
    expect(foo).toHaveClass('test2');
  });
});
