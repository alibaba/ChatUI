import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { ToolbarButton } from '../ToolbarButton';

afterEach(cleanup);

describe('<ToolbarButton />', () => {
  it('should render the toolbar button', () => {
    const { container } = render(
      <ToolbarButton item={{ type: 'test', title: 'test' }} onClick={() => {}} />,
    );
    const item = container.querySelector('.Toolbar-item');

    expect(item).toHaveAttribute('data-type', 'test');
    expect(item?.querySelector('.Toolbar-btnText')).toHaveTextContent('test');
  });

  it('should have the icon', () => {
    const { container } = render(
      <ToolbarButton item={{ type: 'test', title: 'test', icon: 'test' }} onClick={() => {}} />,
    );
    const btnIcon = container.querySelector('.Toolbar-btnIcon');

    expect(btnIcon).toContainHTML('<use xlink:href="#icon-test"></use>');
  });

  it('should have the image', () => {
    const imgUrl = '/test.png';
    const { container } = render(
      <ToolbarButton item={{ type: 'test', title: 'test', img: imgUrl }} onClick={() => {}} />,
    );
    const img = container.querySelector('.Toolbar-img');

    expect(img).toHaveAttribute('src', imgUrl);
  });
});
