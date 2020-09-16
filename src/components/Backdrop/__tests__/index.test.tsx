import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Backdrop } from '..';

afterEach(cleanup);

describe('<Backdrop />', () => {
  it('should render Backdrop', () => {
    const { container } = render(<Backdrop active />);
    const element = container.querySelector('.Backdrop');

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('active');
  });
});
