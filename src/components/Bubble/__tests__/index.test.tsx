import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Bubble } from '..';

afterEach(cleanup);

describe('<Bubble />', () => {
  it('should render bubble', () => {
    const content = 'myTestContent';
    const type = 'text';

    const { getByText } = render(<Bubble>{content}</Bubble>);
    const element = getByText(content);

    expect(element).toHaveClass(type);
    expect(element).toHaveAttribute('data-type', type);
  });

  it('should render content', () => {
    const text = 'myText';
    const { container } = render(<Bubble content={text} />);
    const element = container.querySelector('.Bubble');

    expect(element).toHaveClass('text');
    expect(element).toHaveAttribute('data-type', 'text');
    expect(element).toHaveTextContent(text);
  });

  it('should render custom type', () => {
    const text = 'myCustom';
    const content = <span>{text}</span>;
    const type = 'myType';

    const { container } = render(<Bubble type={type}>{content}</Bubble>);
    const element = container.querySelector('.Bubble');

    expect(element).toHaveClass(type);
    expect(element).toHaveAttribute('data-type', type);
    expect(element).toHaveTextContent(text);
  });
});
