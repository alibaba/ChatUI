import React from 'react';
import clsx from 'clsx';

export interface SkeletonProps {
  className?: string;
  w?: React.CSSProperties['width'];
  h?: React.CSSProperties['height'];
  mb?: React.CSSProperties['marginBottom'];
  style?: React.CSSProperties;
  r?: 'sm' | 'md' | 'xl' | 'none';
}

export const Skeleton = ({ className, w, h, mb, r, style }: SkeletonProps) => {
  return (
    <div
      className={clsx('Skeleton', r && `Skeleton--r-${r}`, className)}
      style={{ ...style, width: w, height: h, marginBottom: mb }}
    />
  );
};
