import React from 'react';
import clsx from 'clsx';
import { Image } from '../Image';

type ImgItem = {
  src: string;
  id?: string;
  [k: string]: any;
};

export interface ImageListProps {
  className?: string;
  list: ImgItem[];
  onClick?: (img: ImgItem, event: React.MouseEvent<HTMLImageElement>) => void;
}

interface ImageItemProps {
  img: ImgItem;
  onClick?: ImageListProps['onClick'];
}

const ImageItem = ({ img, onClick }: ImageItemProps) => {
  const handleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    onClick?.(img, e);
  };

  return <Image src={img.src} onClick={handleClick} />;
};

export const ImageList = (props: ImageListProps) => {
  const { className, list, onClick } = props;

  return (
    <ul className={clsx('ImageList', className)}>
      {list.map((img) => (
        <li key={img.id || img.src}>
          <ImageItem img={img} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
};
