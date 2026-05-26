import React from 'react';
import clsx from 'clsx';
import { Image } from '../Image';

type ImgItem = {
  src: string;
  id?: string;
  caption?: string;
  [k: string]: any;
};

export interface ImageListProps {
  className?: string;
  list: ImgItem[];
  onClick?: (img: ImgItem, event: React.MouseEvent<HTMLImageElement>) => void;
}

interface ImageItemProps {
  item: ImgItem;
  onClick?: ImageListProps['onClick'];
}

const ImageItem = ({ item, onClick }: ImageItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    onClick?.(item, e);
  };

  return (
    <li className="ImageList-item">
      <Image src={item.src} onClick={handleClick} />
      {item.caption && <div className="ImageList-caption">{item.caption}</div>}
    </li>
  );
};

export const ImageList = (props: ImageListProps) => {
  const { className, list, onClick } = props;

  return (
    <ul className={clsx('ImageList', className)}>
      {list.map((item) => (
        <ImageItem key={item.id || item.src} item={item} onClick={onClick} />
      ))}
    </ul>
  );
};
