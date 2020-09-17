import React from 'react';
import clsx from 'clsx';

export type AvatarSize = 'sm' | 'md' | 'lg';

export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  url?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { className, src, alt, url, size = 'md', shape = 'circle', children } = props;

  const Element = url ? 'a' : 'span';
  return (
    <Element
      className={clsx('Avatar', `Avatar--${size}`, `Avatar--${shape}`, className)}
      href={url}
    >
      {src ? <img src={src} alt={alt} /> : children}
    </Element>
  );
};
