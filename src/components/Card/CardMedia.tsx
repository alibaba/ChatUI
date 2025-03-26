import React from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';

export type CardMediaProps = {
  className?: string;
  aspectRatio?: 'square' | 'wide';
  color?: string;
  image?: string;
};

export const CardMedia: React.FC<CardMediaProps> = (props) => {
  const { className, aspectRatio = 'square', color, image, children, ...other } = props;

  const bgStyle = {
    backgroundColor: color || undefined,
    backgroundImage: typeof image === 'string' ? `url('${image}')` : undefined,
  };

  return (
    <div
      className={clsx(
        'CardMedia',
        {
          'CardMedia--wide': aspectRatio === 'wide',
          'CardMedia--square': aspectRatio === 'square',
        },
        className,
      )}
      style={bgStyle}
      {...other}
    >
      {children && (
        <Flex className="CardMedia-content" direction="column" center>
          {children}
        </Flex>
      )}
    </div>
  );
};
