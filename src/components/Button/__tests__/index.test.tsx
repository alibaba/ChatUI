import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Button } from '..';

afterEach(cleanup);

describe('<Button />', () => {
  it('should render button', () => {
    const text = 'myButton';

    const { getByText } = render(<Button>{text}</Button>);
    const element = getByText(text);

    expect(element).toHaveClass('Btn');
  });

  it('should render primary button', () => {
    const text = 'myButton';

    const { getByText } = render(<Button color="primary">{text}</Button>);
    const element = getByText(text);

    expect(element).toHaveClass('Btn--primary');
  });

  it('should render text button', () => {
    const text = 'myButton';

    const { getByText } = render(<Button variant="text">{text}</Button>);
    const element = getByText(text);

    expect(element).toHaveClass('Btn--text');
  });

  it('should apply size class', () => {
    const text = 'myButton';

    const { getByText } = render(<Button size="sm">{text}</Button>);
    const element = getByText(text);

    expect(element).toHaveClass('Btn--sm');
  });

  it('should be block', () => {
    const text = 'myButton';

    const { getByText } = render(<Button block>{text}</Button>);
    const element = getByText(text);

    expect(element).toHaveClass('Btn--block');
  });

  it('should call onClick callback', () => {
    const text = 'myButton';
    let flag = false;
    const handleClick = () => (flag = true);

    const { getByText } = render(<Button onClick={handleClick}>{text}</Button>);
    const element = getByText(text);

    fireEvent.click(element);

    expect(flag).toBeTruthy();
  });

  it('should be disabled', () => {
    const text = 'myButton';
    let flag = false;
    const handleClick = () => (flag = true);

    const { getByText } = render(
      <Button disabled onClick={handleClick}>
        {text}
      </Button>,
    );
    const element = getByText(text);

    fireEvent.click(element);

    expect(flag).toBeFalsy();
  });

  it('should loading', () => {
    const text = 'myButton';
    let flag = false;
    const handleClick = () => (flag = true);

    const { getByText } = render(
      <Button loading onClick={handleClick}>
        {text}
      </Button>,
    );
    const element = getByText(text);

    fireEvent.click(element);

    expect(flag).toBeFalsy();
  });
});
