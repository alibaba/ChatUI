import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Checkbox } from '..';

afterEach(cleanup);

describe('<Checkbox />', () => {
  it('should render Checkbox', () => {
    const { container } = render(<Checkbox />);
    const element = container.querySelector('.Checkbox');

    expect(element).toBeInTheDocument();
  });

  it('should render label', () => {
    const text = 'myLabel';
    const { getByText } = render(<Checkbox label={text} />);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
  });

  it('should be defaultChecked', () => {
    const { container } = render(<Checkbox defaultChecked />);

    expect(container.querySelector('input')).toBeChecked();
  });

  it('should be checked', () => {
    const { container } = render(<Checkbox checked onChange={() => {}} />);

    expect(container.querySelector('.Checkbox')).toHaveClass('Checkbox--checked');
    expect(container.querySelector('input')).toBeChecked();
  });

  it('should be disabled', () => {
    const { container } = render(<Checkbox disabled />);

    expect(container.querySelector('.Checkbox')).toHaveClass('Checkbox--disabled');
    expect(container.querySelector('input')).toBeDisabled();
  });

  it('should call onChange callback', (done) => {
    const { container } = render(<Checkbox onChange={() => done()} />);
    const element = container.querySelector('input');

    fireEvent.click(element!);
  });

  it('should be checked with change', (done) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.checked) {
        done();
      }
    }

    const { container } = render(<Checkbox onChange={handleChange} />);
    const element = container.querySelector('input');

    fireEvent.click(element!);
  });

  it('should be unchecked with change', (done) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (!e.target.checked) {
        done();
      }
    }

    const { container } = render(<Checkbox checked onChange={handleChange} />);
    const element = container.querySelector('input');

    fireEvent.click(element!);
  });

  it('should have a custom className', () => {
    const { container } = render(<Checkbox className="myCheckbox" />);
    expect(container.querySelector('.Checkbox')).toHaveClass('myCheckbox');
  });
});
