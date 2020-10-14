import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Input } from '..';

afterEach(cleanup);

describe('<Input />', () => {
  it('should render a input', () => {
    const { getByTestId } = render(<Input value="" data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveClass('Input');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('should render a textarea via multiline', () => {
    const { getByTestId } = render(<Input value="" multiline data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement.tagName).toBe('TEXTAREA');
  });

  it('should render a textarea via autoSize', () => {
    const { getByTestId } = render(<Input value="" autoSize data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement.tagName).toBe('TEXTAREA');
  });

  it('should render a textarea via rows', () => {
    const { getByTestId } = render(<Input value="" rows={2} data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement.tagName).toBe('TEXTAREA');
  });

  it('should have a custom type', () => {
    const { getByTestId } = render(<Input value="" type="number" data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('type', 'number');
  });

  it('should have a placeholder', () => {
    const { getByTestId } = render(
      <Input value="" placeholder="testPlaceholder" data-testid="input" />,
    );
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('placeholder', 'testPlaceholder');
  });

  it('should have 2 rows', () => {
    const { getByTestId } = render(<Input value="" rows={2} data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('rows', '2');
  });

  it('should have the rows (> minRows)', () => {
    const { getByTestId } = render(<Input value="" rows={2} minRows={3} data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('rows', '3');
  });

  it('should have the rows (< maxRows)', () => {
    const { getByTestId } = render(<Input value="" rows={4} maxRows={3} data-testid="input" />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('rows', '3');
  });

  it('should auto size', () => {
    const { getByTestId } = render(
      <Input value="" autoSize placeholder="test" data-testid="input" />,
    );
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveAttribute('rows', '1');

    fireEvent.change(inputElement, {
      target: {
        value: 'test change',
      },
    });

    // TODO
    expect(inputElement).not.toHaveAttribute('rows');
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
    function Test() {
      const [value, setValue] = useState('');
      return (
        <Input
          value={value}
          multiline
          maxLength={5}
          onChange={(val) => setValue(val)}
          data-testid="input"
        />
      );
    }

    const { getByTestId } = render(<Test />);
    const inputElement = getByTestId('input');

    expect(inputElement).toHaveValue('');

    fireEvent.change(inputElement, {
      target: {
        value: '123456789',
      },
    });

    expect(inputElement).toHaveValue('12345');
  });
});
