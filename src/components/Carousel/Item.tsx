import React from 'react';

interface CarouselItemProps {
  width: string;
  children?: React.ReactNode;
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { width, children } = props;

  return (
    <div className="Carousel-item" style={{ width }}>
      {children}
    </div>
  );
};
