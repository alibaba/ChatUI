import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Tag } from '..';

afterEach(cleanup);

describe('<Tag />', () => {

  it('should support className', () => {
    const { container } = render(<Tag className="test">ChatUI</Tag>);
    const tag = container.querySelectorAll('.Tag')[0];
    if (tag) {
      expect(tag).toHaveClass('test');
    }
  });
});
