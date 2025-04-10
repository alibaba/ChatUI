import React, { useState, useEffect, useRef } from 'react';
import { useLatest } from '../../hooks/useLatest';

const indicatorWidth = 20;

export interface ScrollGridProps {
  wrap?: boolean;
  onIndicatorToggle?: (show: boolean) => void;
  children: React.ReactNode;
}

export function ScrollGrid({ wrap = false, children, onIndicatorToggle }: ScrollGridProps) {
  const [showIndicator, setShowIndicator] = useState(false);
  const [barWidth, setBarWidth] = useState(0);
  const [barLeft, setBarLeft] = useState(0);
  const scrollerRef = useRef(null);
  const ratioRef = useRef(0.04);
  const onIndicatorToggleRef = useLatest(onIndicatorToggle);

  useEffect(() => {
    if (wrap) return;

    function updateIndicator() {
      const scroller = scrollerRef.current;
      if (!scroller) return;

      const { scrollWidth, clientWidth } = scroller;
      if (scrollWidth === clientWidth) {
        setShowIndicator(false);
        return;
      }

      const ratio = indicatorWidth / scrollWidth;
      ratioRef.current = ratio;
      setShowIndicator(true);
      setBarWidth(clientWidth * ratio);
    }

    updateIndicator();

    window.addEventListener('resize', updateIndicator);
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [wrap]);

  useEffect(() => {
    onIndicatorToggleRef.current?.(showIndicator);
  }, [onIndicatorToggleRef, showIndicator]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { scrollLeft } = e.target as HTMLDivElement;
    setBarLeft(scrollLeft * ratioRef.current);
  };

  return (
    <div className="ScrollGrid" data-wrap={wrap}>
      <div
        className="ScrollGrid-scroller"
        ref={scrollerRef}
        onScroll={wrap ? undefined : handleScroll}
      >
        <div className="ScrollGrid-inner">{children}</div>
      </div>
      {showIndicator && (
        <div className="ScrollGrid-indicator">
          <div
            className="ScrollGrid-indicatorBar"
            style={{ width: barWidth, transform: `translateX(${barLeft}px)` }}
          />
        </div>
      )}
    </div>
  );
}
