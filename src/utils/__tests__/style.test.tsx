import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { setTransform, setTransition } from '../style';

afterEach(cleanup);

describe('utils/style', () => {
  it('should have the transform style', () => {
    const { getByTestId } = render(<div data-testid="foo" />);
    const foo = getByTestId('foo');

    setTransform(foo, 'translate(1px,2px)');

    expect(foo).toHaveStyle({ transform: 'translate(1px,2px)' });
  });

  it('should have the transform style', () => {
    const { getByTestId } = render(<div data-testid="foo" />);
    const foo = getByTestId('foo');

    setTransition(foo, '1s');

    expect(foo).toHaveStyle({ transition: '1s' });
  });
});
