import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Card } from '..';

afterEach(cleanup);

describe('<Card />', () => {
  it('should render card', () => {
    const text = 'myCard';

    const { getByText } = render(<Card>{text}</Card>);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Card');
  });

  it('should apply size class', () => {
    const text = 'myCard';

    const { getByText } = render(<Card size="sm">{text}</Card>);
    const element = getByText(text);

    expect(element).toHaveClass('Card--sm');
  });

  it('should be fluid', () => {
    const text = 'myCard';

    const { getByText } = render(<Card fluid>{text}</Card>);
    const element = getByText(text);

    expect(element).toHaveClass('Card--fluid');
  });
});
