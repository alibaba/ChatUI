import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Loading } from '..';

afterEach(cleanup);

describe('<Loading />', () => {
  it('should support tip text', () => {
    const content = 'Hello ChatUI';
    const { getByText } = render(<Loading tip={content} />);
    const loading = getByText(content);
    expect(loading).toBeInTheDocument();
  });

});
