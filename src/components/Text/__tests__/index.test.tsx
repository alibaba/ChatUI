import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Text } from '..';

afterEach(cleanup);

describe('<Text />', () => {

  it('should support align', () => {
    const { getByText } = render(<Text align="center">ChatUI</Text>);
    expect(getByText('ChatUI')).toHaveClass('Text--center');
  });

  it('should support truncate', () => {
    const { getByText } = render(<Text truncate={true}>ChatUI is easy to use</Text>);
    expect(getByText('ChatUI is easy to use')).toHaveClass('Text--truncate');
  });

  it('should support ellipsis', () => {
    const { getByText } = render(<Text truncate={2}>ChatUI is easy to use</Text>);
    expect(getByText('ChatUI is easy to use')).toHaveClass('Text--ellipsis');
  });
});
