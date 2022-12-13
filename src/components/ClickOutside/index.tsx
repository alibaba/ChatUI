import React, { useEffect, useRef } from 'react';

const doc = document;
const html = doc.documentElement;

export interface ClickOutsideProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  // mouseEvent?: 'click' | 'mousedown' | 'mouseup' | false;
  mouseEvent?: 'click' | 'mousedown' | 'mouseup';
  children?: React.ReactNode;
}

export const ClickOutside = (props: ClickOutsideProps) => {
  const { children, onClick, mouseEvent = 'mouseup', ...others } = props;
  const wrapper = useRef<HTMLDivElement>(null!);

  function handleClick(e: any) {
    if (!wrapper.current) return;

    if (html.contains(e.target) && !wrapper.current.contains(e.target)) {
      onClick(e);
    }
  }

  useEffect(() => {
    if (mouseEvent) {
      doc.addEventListener(mouseEvent, handleClick);
    }
    return () => {
      doc.removeEventListener(mouseEvent, handleClick);
    };
  });

  return (
    <div ref={wrapper} {...others}>
      {children}
    </div>
  );
};
