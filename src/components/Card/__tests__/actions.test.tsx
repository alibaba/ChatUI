import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CardActions } from '..';

afterEach(cleanup);

describe('<CardActions />', () => {
  it('should render CardActions', () => {
    const text = 'myText';

    const { getByText } = render(<CardActions>{text}</CardActions>);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('CardActions');
  });

  it('should apply direction class', () => {
    const text = 'myText';

    const { getByText } = render(<CardActions direction="column">{text}</CardActions>);
    const element = getByText(text);

    expect(element).toHaveClass('CardActions--column');
  });
});
