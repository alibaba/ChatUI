import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { Toolbar } from '..';

afterEach(cleanup);

describe('<Toolbar />', () => {

  it('should render toolbar correctly', () => {
    const items = [{
      type: 'camera',
      title: 'camera',
    }, {
      type: 'smiley',
      title: 'smiley',
    }];
    const onClick = jest.fn();
    const { container } = render(<Toolbar items={items} onClick={onClick} />);
    expect(container).toMatchSnapshot();
  });
});
