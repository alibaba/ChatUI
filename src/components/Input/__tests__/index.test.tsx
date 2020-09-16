import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Input } from '..';

afterEach(cleanup);

describe('<Input />', () => {
  it('should render a input', () => {
    const { getByTestId } = render(<Input value="" data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveClass('Input');
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<Input disabled value="" data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toBeDisabled();
  });

  it('should call onChange callback', (done) => {
    const { getByTestId } = render(<Input value="" onChange={() => done()} data-testid="input" />);
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
      target: {
        value: 'foo',
      },
    });
  });

  it('should apply maxLength', () => {
    const { getByTestId } = render(<Input value="123456789" maxLength={5} data-testid="input" />);
    const inputElement = getByTestId('input');

    fireEvent.change(inputElement, {
      target: {
        value: 'foo',
      },
    });
  });
});
