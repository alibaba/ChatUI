import React from 'react';

interface CarouselItemProps {
  width: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = (props) => {
  const { width, children } = props;

  return (
    <div className="Carousel-item" style={{ width }}>
      {children}
    </div>
  );
};
