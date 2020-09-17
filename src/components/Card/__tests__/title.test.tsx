import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardTitle } from '..';

afterEach(cleanup);

describe('<CardTitle />', () => {
  it('should render CardTitle', () => {
    const { container } = render(<CardTitle>myTitle</CardTitle>);
    const element = container.querySelector('.CardTitle-title');

    expect(element).toBeInTheDocument();
  });

  it('should render with title', () => {
    const { container } = render(<CardTitle title="myTitle" />);
    const element = container.querySelector('.CardTitle-title');

    expect(element).toBeInTheDocument();
  });

  it('should render with subtitle', () => {
    const { container } = render(<CardTitle title="myTitle" subtitle="mySubtitle" />);
    const element = container.querySelector('.CardTitle-subtitle');

    expect(element).toBeInTheDocument();
  });

  it('should render with children', () => {
    const { getByText } = render(
      <CardTitle>
        <span>myContent</span>
      </CardTitle>,
    );
    const element = getByText('myContent');

    expect(element).toBeInTheDocument();
  });

  it('should be center', () => {
    const { container } = render(<CardTitle center>myTitle</CardTitle>);
    const element = container.querySelector('.CardTitle');

    expect(element).toHaveClass('CardTitle--center');
  });
});
