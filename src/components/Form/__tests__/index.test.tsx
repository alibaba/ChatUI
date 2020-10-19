import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Form } from '..';

afterEach(cleanup);

describe('<Form />', () => {
  it('should render a form', () => {
    const { getByTestId } = render(<Form data-testid="form" />);
    const form = getByTestId('form');

    expect(form).toBeInTheDocument();
  });

  it('should render a form (light)', () => {
    const { getByTestId } = render(<Form theme="light" data-testid="form" />);
    const form = getByTestId('form');

    expect(form).toHaveClass('is-light');
  });
});
