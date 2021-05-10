import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import useForwardRef from '../../hooks/useForwardRef';

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src: string;
  lazy?: boolean;
  fluid?: boolean;
}

export const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { className, src: oSrc, lazy, fluid, children, ...other } = props;
  const [src, setSrc] = useState('');
  const imgRef = useForwardRef(ref);
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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [imgRef, lazy]);

  useEffect(() => {
    savedSrc.current = oSrc;
    setSrc(lazy && !lazyLoaded.current ? '' : oSrc);
  }, [lazy, oSrc]);

  return (
    <img
      className={clsx('Image', { 'Image--fluid': fluid }, className)}
      src={src}
      alt=""
      ref={imgRef}
      {...other}
    />
  );
});
