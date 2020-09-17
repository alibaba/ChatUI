import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { getRandomString, reflow } from '..';

afterEach(cleanup);

describe('utils/index', () => {
  it('should get the random string', () => {
    const str1 = getRandomString();
    const str2 = getRandomString();

    expect(str1).not.toBe(str2);
  });

  it('should get the random string', () => {
    const str1 = getRandomString();
    const str2 = getRandomString();

    expect(str1).not.toBe(str2);
  });

  it('should return element offset height to force the reflow', () => {
    const { getByTestId } = render(<div data-testid="foo" />);
    const foo = getByTestId('foo');

    expect(reflow(foo)).toBe(0);
  });
});
