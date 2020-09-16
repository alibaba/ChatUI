import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardMedia } from '..';

afterEach(cleanup);

describe('<CardMedia />', () => {
  it('should render CardMedia', () => {
    const text = 'myText';

    const { getByText } = render(<CardMedia>{text}</CardMedia>);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
  });

  it('should apply aspectRatio class', () => {
    const { container } = render(<CardMedia aspectRatio="square">square</CardMedia>);
    const element = container.querySelector('.CardMedia');

    expect(element).toHaveClass('CardMedia--square');
  });

  it('should render color', () => {
    const { container } = render(<CardMedia color="red">color</CardMedia>);
    const element = container.querySelector('.CardMedia');

    expect(element).toHaveStyle({ backgroundColor: 'red' });
  });

  it('should render image', () => {
    const url = '//gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg';
    const { container } = render(<CardMedia image={url}>image</CardMedia>);
    const element = container.querySelector('.CardMedia');

    expect(element).toHaveStyle({ backgroundImage: `url(${url})` });
  });
});
