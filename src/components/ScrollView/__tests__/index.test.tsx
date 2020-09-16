import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ScrollView } from '..';

afterEach(cleanup);

describe('<ScrollView />', () => {
  it('should render the item', () => {
    const { getAllByTestId } = render(
      <ScrollView data={[1, 2]} renderItem={() => <span data-testid="item" />} />,
    );
    const itemList = getAllByTestId('item');

    expect(itemList.length).toBe(2);
  });

  it('should apply the fullWidth class', () => {
    const { getByTestId } = render(
      <ScrollView fullWidth data={[1]} renderItem={() => null} data-testid="scrollView" />,
    );
    const scrollView = getByTestId('scrollView');

    expect(scrollView).toHaveClass('ScrollView--fullWidth');
  });

  it('should have two controls', () => {
    const { getByTestId } = render(
      <ScrollView
        fullWidth
        data={[1, 2, 3, 4, 5]}
        renderItem={() => <span />}
        data-testid="scrollView"
      />,
    );
    const scrollView = getByTestId('scrollView');

    expect(scrollView.querySelectorAll('.ScrollView-control').length).toBe(2);
  });

  it('should render the children', () => {
    const { getByTestId } = render(
      <ScrollView fullWidth data={[1]} renderItem={() => null} data-testid="scrollView">
        <span data-testid="child" />
      </ScrollView>,
    );
    const scrollView = getByTestId('scrollView');
    const child = getByTestId('child');

    expect(scrollView).toContainElement(child);
  });
});
