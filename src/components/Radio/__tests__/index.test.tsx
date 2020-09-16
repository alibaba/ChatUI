import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Radio } from '..';

afterEach(cleanup);

describe('<Radio />', () => {
  it('should render Radio', () => {
    const { container } = render(<Radio />);
    const element = container.querySelector('.Radio');

    expect(element).toBeInTheDocument();
  });

  it('should render label', () => {
    const text = 'myLabel';
    const { getByText } = render(<Radio label={text} />);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
  });

  it('should be defaultChecked', () => {
    const { container } = render(<Radio defaultChecked />);

    expect(container.querySelector('input')).toBeChecked();
  });

  it('should be checked', () => {
    const { container } = render(<Radio checked onChange={() => {}} />);

    expect(container.querySelector('.Radio')).toHaveClass('Radio--checked');
    expect(container.querySelector('input')).toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(<Radio disabled />);

    expect(container.querySelector('.Radio')).toHaveClass('Radio--disabled');
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('should call onChange callback', (done) => {
    const { container } = render(<Radio onChange={() => done()} />);
    const element = container.querySelector('input');

    fireEvent.click(element!);
  });

  it('should be checked with change', (done) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
        done();
      }
    }

    const { container } = render(<Radio onChange={handleChange} />);
    const element = container.querySelector('input');

    fireEvent.click(element!);
  });

  it('should have a custom className', () => {
    const { container } = render(<Radio className="myRadio" />);
    expect(container.querySelector('.Radio')).toHaveClass('myRadio');
  });
});
