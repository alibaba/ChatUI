import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

export interface ImageProps {
  className?: string,
  src: string,
  alt?: string,
  lazy?: boolean,
  fluid?: boolean,
};

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    className,
    src: oSrc,
    alt = '',
    lazy,
    fluid,
    children,
    ...other
  } = props;
  const [src, setSrc] = useState('');
  const imgRef = ref || useRef<HTMLImageElement>(null);
  const savedSrc = useRef('');
  const lazyLoaded = useRef(false);

  useEffect(() => {
    if (!lazy) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSrc(savedSrc.current);
        lazyLoaded.current = true;
        observer.unobserve(entry.target);
      }
    });

    observer.observe((imgRef as React.MutableRefObject<HTMLImageElement>).current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    savedSrc.current = oSrc;
    setSrc(lazy && !lazyLoaded.current ? '' : oSrc);
  }, [oSrc]);

  return (
    <img
      className={clsx('Image', { 'Image--fluid': fluid }, className)}
      src={src}
      alt={alt}
      ref={imgRef}
      {...other}
    />
  );
});
