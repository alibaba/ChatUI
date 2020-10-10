import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Toolbar } from '..';

afterEach(cleanup);

describe('<Toolbar />', () => {
  it('should render toolbar', () => {
    const items = [
      {
        type: 'item1',
        title: 'item1',
      },
      {
        type: 'item2',
        title: 'item2',
      },
    ];

    const { container } = render(<Toolbar items={items} onClick={() => {}} />);
    const toolbar = container.querySelector('.Toolbar');

    expect(toolbar).not.toBeNull();
    expect(toolbar?.querySelectorAll('.Toolbar-btn').length).toBe(2);
  });

  it('should render toolbar', (done) => {
    const items = [
      {
        type: 'item1',
        title: 'item1',
      },
      {
        type: 'item2',
        title: 'item2',
      },
    ];

    const { getByText } = render(
      <Toolbar
        items={items}
        onClick={(item) => {
          if (item.type === 'item2') {
            done();
          }
        }}
      />,
    );

    fireEvent.click(getByText('item2'));
  });
});
