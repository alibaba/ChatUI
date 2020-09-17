import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardContent } from '..';

afterEach(cleanup);

describe('<CardContent />', () => {
  it('should render CardContent', () => {
    const text = 'myText';

    const { getByText } = render(<CardContent>{text}</CardContent>);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('CardContent');
  });
});
