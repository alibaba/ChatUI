import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import { Carousel } from '../../src';

export default {
  title: 'Carousel',
  component: Carousel,
} as Meta;

const imgs = [
  '//gw.alicdn.com/tfs/TB1GRW3voY1gK0jSZFMXXaWcVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1I6i2vhD1gK0jSZFsXXbldVXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1XCq4veH2gK0jSZFEXXcqMpXa-620-320.jpg',
  '//gw.alicdn.com/tfs/TB1dzG8vbj1gK0jSZFuXXcrHpXa-620-319.jpg',
];

// const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const ManyImages = (ars) => (
  <Carousel {...ars}>
    {imgs.map((img, i) => (
      <div key={i}>
        <p>{i}</p>
        <img width="320" src={img} alt="" />
      </div>
    ))}
  </Carousel>
);

ManyImages.args = {
  startIndex: 0,
  draggable: true,
  duration: 300,
  easing: 'ease',
  threshold: 20,
  loop: true,
  rtl: false,
  autoPlay: false,
  interval: 4000,
  dots: true,
};

function TestMethods() {
  const carouselRef = React.useRef(null);

  function handleClick(e) {
    console.log('click item:', e);
  }

  return (
    <div>
      <Carousel ref={carouselRef}>
        {imgs.map((img, i) => (
          <div key={i} onClick={handleClick}>
            <p>{i}</p>
            <a href="javascript:;">
              <img width="320" src={img} alt="" />
            </a>
          </div>
        ))}
      </Carousel>
      <button
        type="button"
        onClick={() => {
          carouselRef.current.prev();
        }}
      >
        prev
      </button>
      <button
        type="button"
        onClick={() => {
          carouselRef.current.next();
        }}
      >
        next
      </button>
      <button
        type="button"
        onClick={() => {
          carouselRef.current.goTo(2);
        }}
      >
        goTo(2)
      </button>
    </div>
  );
}

export const Methods = () => <TestMethods />;
