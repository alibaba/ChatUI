import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Avatar } from '..';

afterEach(cleanup);

describe('<Avatar />', () => {
  it('should render avatar', () => {
    const text = 'chatui';
    const { getByText } = render(<Avatar>{text}</Avatar>);
    const element = getByText(text);

    expect(element).toBeInTheDocument();
  });

  it('should render image avatar', () => {
    const src = '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg';
    const alt = 'ChatUI';
    const { container } = render(<Avatar src={src} alt={alt} />);
    const avatarImg = container.querySelector('img');

    expect(avatarImg && avatarImg.getAttribute('src')).toBe(src);
    expect(avatarImg && avatarImg.getAttribute('alt')).toBe(alt);
  });

  it('should render link', () => {
    const src = '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg';
    const alt = 'ChatUI';

    const { container } = render(<Avatar src={src} alt={alt} url={src} />);
    const link = container.querySelector('a');
    const avatarImg = container.querySelector('img');

    expect(container).toContainElement(link);
    expect(avatarImg && avatarImg.getAttribute('src')).toBe(src);
    expect(avatarImg && avatarImg.getAttribute('alt')).toBe(alt);
  });
});
