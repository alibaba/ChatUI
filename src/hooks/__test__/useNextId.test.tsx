import React from 'react';
import { render, cleanup } from '@testing-library/react';
import useNextId from '../useNextId';

afterEach(cleanup);

describe('useNextId', () => {
  it('should get id', () => {
    function Test() {
      const id = useNextId();
      return <span data-testid="span">{id}</span>;
    }

    const { getByTestId } = render(<Test />);

    expect(getByTestId('span')).toHaveTextContent('id-0');
  });

  it('should get unique id', () => {
    function Test() {
      const id1 = useNextId();
      const id2 = useNextId();
      return <span data-testid="span">{`${id1 === id2}`}</span>;
    }

    const { getByTestId } = render(<Test />);

    expect(getByTestId('span')).toHaveTextContent('false');
  });

  it('should have a custom prefix', () => {
    function Test() {
      const id = useNextId('test-');
      return <span data-testid="span">{id}</span>;
    }

    const { getByTestId } = render(<Test />);

    expect(getByTestId('span')).toHaveTextContent('test-');
  });
});
