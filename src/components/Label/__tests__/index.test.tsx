import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Label } from '..';

afterEach(cleanup);

describe('<Label />', () => {
  it('should render label', () => {
    const content = 'Hello ChatUI';
    const { getByText } = render(<Label>{content}</Label>);
    const label = getByText(content);

    expect(label).toBeInTheDocument();
  });
});
