import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { List, ListItem } from '..';

afterEach(cleanup);

describe('<List />', () => {
  it('should support bordered', () => {
    const { getByRole } = render(
      <List bordered={true}>
        <ListItem content="Hello ChatUI" />
      </List>,
    );
    const list = getByRole('list');
    expect(list).toHaveClass('List--bordered');
  });

  it('should support right icon', () => {
    const { getByRole } = render(
      <List>
        <ListItem content="Hello ChatUI" rightIcon="chevron-right" />
      </List>,
    );
    const listItem = getByRole('listitem');
    expect(listItem.querySelectorAll('.Icon').length).toBe(1);
  });

  it('should support as', () => {
    const { getByRole } = render(
      <List>
        <ListItem as="a" content="Hello ChatUI" rightIcon="chevron-right" />
      </List>,
    );
    const list = getByRole('list');
    expect(list.querySelectorAll('a').length).toBe(1);
  });
});
