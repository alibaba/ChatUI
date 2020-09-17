import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardText } from '..';

afterEach(cleanup);

describe('<CardText />', () => {
  it('should render CardText', () => {
    const { container } = render(<CardText>myText</CardText>);
    const element = container.querySelector('p');

    expect(element).toBeInTheDocument();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <CardText>
        <span>myText</span>
      </CardText>,
    );
    const element = getByText('myText');

    expect(element).toBeInTheDocument();
  });
});
