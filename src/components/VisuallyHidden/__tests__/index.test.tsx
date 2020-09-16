import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { VisuallyHidden } from '..';

afterEach(cleanup);

describe('<VisuallyHidden />', () => {

  it('should render correctly', () => {
    const { container } = render(<VisuallyHidden />);
    expect(container).toMatchSnapshot();
  });
});
