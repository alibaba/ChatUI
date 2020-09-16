import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Typing } from '..';

afterEach(cleanup);

describe('<Typing />', () => {

  it('should render correctly', () => {
    const { container } = render(<Typing />);
    expect(container).toMatchSnapshot();
  });
});
