import React from 'react';
import clsx from 'clsx';

export type MediaObjectProps = {
  className?: string;
  picUrl?: string;
  picAlt?: string;
  picSize?: 'sm' | 'md' | 'lg';
  title?: string;
  meta?: React.ReactNode;
};

export const MediaObject = (props: MediaObjectProps) => {
  const { className, picUrl, picSize, title, picAlt, meta } = props;
  return (
    <div className={clsx('MediaObject', className)}>
      {picUrl && (
        <div className={clsx('MediaObject-pic', picSize && `MediaObject-pic--${picSize}`)}>
          <img src={picUrl} alt={picAlt || title} />
        </div>
      )}
      <div className="MediaObject-info">
        <h3 className="MediaObject-title">{title}</h3>
        <div className="MediaObject-meta">{meta}</div>
      </div>
    </div>
  );
};
