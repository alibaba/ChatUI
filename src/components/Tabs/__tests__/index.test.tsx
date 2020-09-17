import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Tabs, Tab } from '..';

afterEach(cleanup);

describe('<Tabs />', () => {

  it('should support tab index', () => {
    const { container } = render(<Tabs index={1}>
      <Tab label="tab1">
        <p>Content 1</p>
      </Tab>
      <Tab label="tab2">
        <p>Content 2</p>
      </Tab>
      <Tab label="tab3">
        <p>Content 3</p>
      </Tab>
    </Tabs>);
    const active = container.querySelectorAll('.Tabs-pane')[1];
    if (active) {
      expect(active).toHaveClass('active');
    }
  });

  it('should support onChange', () => {
    const onChange = jest.fn();
    const { container } = render(<Tabs onChange={onChange}>
      <Tab label="tab1">
        <p>Content 1</p>
      </Tab>
      <Tab label="tab2">
        <p>Content 2</p>
      </Tab>
      <Tab label="tab3">
        <p>Content 3</p>
      </Tab>
    </Tabs>);
    const active = container.querySelectorAll('.Tabs-navLink')[1];
    if (active) {
      fireEvent(active, new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }));
      expect(onChange).toBeCalledTimes(1);
    }
  });
});
