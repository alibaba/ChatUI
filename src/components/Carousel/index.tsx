import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { CarouselItem } from './Item';

export interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  startIndex?: number;
  draggable?: boolean;
  clickDragThreshold?: number;
  duration?: number;
  easing?: string;
  threshold?: number;
  loop?: boolean;
  rtl?: boolean;
  autoPlay?: boolean;
  interval?: number;
  // pauseOnHover?: boolean;
  dots?: boolean;
  onChange?: (activeIndex?: number) => void;

  // Deprecated:
  autoplay?: boolean;
  autoplaySpeed?: number;
  indicators?: boolean;
}

export interface CarouselHandle {
  goTo: (n: number) => void;
  prev: () => void;
  next: () => void;
}

interface State {
  first: boolean;
  wrapWidth: number;
  hover: boolean;
  startX: number;
  endX: number;
  startY: number;
  canMove: boolean | null;
  preventClick: boolean;
  pressDown: boolean;
}

type DragEvent = React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement, MouseEvent>;

const formElements = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'];

export const Carousel = React.forwardRef<CarouselHandle, CarouselProps>((props, ref) => {
  const {
    className,
    startIndex = 0,
    draggable = true,
    duration = 300,
    easing = 'ease',
    threshold = 20,
    clickDragThreshold = 10,
    loop = true,
    rtl = false,
    autoPlay = props.autoplay || false,
    interval = props.autoplaySpeed || 4000,
    dots = props.indicators || true,
    onChange,
    children,
  } = props;

  const count = React.Children.count(children);
  const itemWith = `${100 / count}%`;

  const wrapperRef = useRef<HTMLDivElement>(null!);
  const innerRef = useRef<HTMLDivElement>(null!);
  const autoPlayTimerRef = useRef<any>(null);

  const stateRef = useRef<State>({
    first: true,
    wrapWidth: 0,
    hover: false,
    startX: 0,
    endX: 0,
    startY: 0,
    canMove: null,
    pressDown: false,
    preventClick: false,
  });

  const getIndex = useCallback(
    (idx: number) => (loop ? idx % count : Math.max(0, Math.min(idx, count - 1))),
    [count, loop],
  );

  const [activeIndex, setActiveIndex] = useState(getIndex(startIndex));
  const [isDragging, setDragging] = useState(false);

  const enableTransition = useCallback(() => {
    innerRef.current.style.transition = `transform ${duration}ms ${easing}`;
  }, [duration, easing]);

  const disableTransition = () => {
    innerRef.current.style.transition = 'transform 0s';
  };

  const moveX = (x: number) => {
    innerRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
  };

  const slideTo = useCallback(
    (idx: number, smooth?: boolean) => {
      const nextIndex = loop ? idx + 1 : idx;
      const offset = (rtl ? 1 : -1) * nextIndex * stateRef.current.wrapWidth;

      if (smooth) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            enableTransition();
            moveX(offset);
          });
        });
      } else {
        moveX(offset);
      }
    },
    [enableTransition, loop, rtl],
  );

  const goTo = useCallback(
    (idx: number) => {
      if (count <= 1) {
        return;
      }

      const nextIndex = getIndex(idx);

      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex);
        // slideTo(nextIndex, loop);
      }
    },
    [activeIndex, count, getIndex],
  );

  const prev = useCallback(() => {
    if (count <= 1) {
      return;
    }

    let nextIndex = activeIndex - 1;

    if (loop) {
      if (nextIndex < 0) {
        const state = stateRef.current;
        const moveTo = count + 1;
        const offset = (rtl ? 1 : -1) * moveTo * state.wrapWidth;
        const dragDist = draggable ? state.endX - state.startX : 0;

        disableTransition();
        moveX(offset + dragDist);
        nextIndex = count - 1;
      }
    } else {
      nextIndex = Math.max(nextIndex, 0);
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
      // slideTo(nextIndex, loop);
    }
  }, [activeIndex, count, draggable, loop, rtl]);

  const next = useCallback(() => {
    if (count <= 1) {
      return;
    }

    let nextIndex = activeIndex + 1;

    if (loop) {
      const isClone = nextIndex > count - 1;
      if (isClone) {
        nextIndex = 0;
        const state = stateRef.current;
        const dragDist = draggable ? state.endX - state.startX : 0;

        disableTransition();
        moveX(dragDist);
      }
    } else {
      nextIndex = Math.min(nextIndex, count - 1);
    }

    if (nextIndex !== activeIndex) {
      setActiveIndex(nextIndex);
      // slideTo(nextIndex, loop);
    }
  }, [activeIndex, count, draggable, loop]);

  const doAutoPlay = useCallback(() => {
    if (!autoPlay || stateRef.current.hover) {
      return;
    }

    autoPlayTimerRef.current = setTimeout(() => {
      enableTransition();
      next();
    }, interval);
  }, [autoPlay, interval, enableTransition, next]);

  const clearAutoPlay = () => {
    clearTimeout(autoPlayTimerRef.current);
  };

  const resetToCurrent = () => {
    slideTo(activeIndex, true);
    doAutoPlay();
  };

  const updateAfterDrag = () => {
    const state = stateRef.current;
    const offset = (rtl ? -1 : 1) * (state.endX - state.startX);
    const offsetDist = Math.abs(offset);
    const isClone1 = offset > 0 && activeIndex - 1 < 0;
    const isClone2 = offset < 0 && activeIndex + 1 > count - 1;

    if (isClone1 || isClone2) {
      if (loop) {
        if (isClone1) {
          prev();
        } else {
          next();
        }
      } else {
        resetToCurrent();
      }
    } else if (offset > 0 && offsetDist > threshold && count > 1) {
      prev();
    } else if (offset < 0 && offsetDist > threshold && count > 1) {
      next();
    } else {
      resetToCurrent();
    }
  };

  const resetDrag = () => {
    stateRef.current = {
      first: false,
      wrapWidth: stateRef.current.wrapWidth,
      hover: false,
      startX: 0,
      endX: 0,
      startY: 0,
      canMove: null,
      preventClick: false,
      pressDown: false,
    };
  };

  const dragStart = (e: DragEvent) => {
    if (formElements.includes((e.target as Element).nodeName)) {
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const ev = 'touches' in e ? e.touches[0] : e;
    const state = stateRef.current;

    state.pressDown = true;
    state.startX = ev.pageX;
    state.startY = ev.pageY;

    clearAutoPlay();
  };

  const dragMove = (e: DragEvent) => {
    e.stopPropagation();

    const ev = 'touches' in e ? e.touches[0] : e;
    const state = stateRef.current;

    if (state.pressDown) {
      if ('touches' in e) {
        if (state.canMove === null) {
          state.canMove = Math.abs(state.startY - ev.pageY) < Math.abs(state.startX - ev.pageX);
        }
        if (!state.canMove) {
          return;
        }
      } else if ((e.target as Element).nodeName === 'A') {
        state.preventClick = true;
      }

      e.preventDefault();
      disableTransition();

      state.endX = ev.pageX;

      const nextIndex = loop ? activeIndex + 1 : activeIndex;
      const nextOffset = nextIndex * state.wrapWidth;
      const dragOffset = state.endX - state.startX;

      if (!isDragging && Math.abs(dragOffset) > clickDragThreshold) {
        setDragging(true);
      }

      // 阻尼
      // if ((activeIndex === 0 && dragOffset > 0) || (activeIndex === count - 1 && dragOffset < 0)) {
      //   dragOffset *= 0.35;
      // }

      const offset = rtl ? nextOffset + dragOffset : dragOffset - nextOffset;
      moveX(offset);
    }
  };

  const dragEnd = (e: DragEvent) => {
    e.stopPropagation();
    const state = stateRef.current;
    state.pressDown = false;
    setDragging(false);
    enableTransition();
    if (state.endX) {
      updateAfterDrag();
    }
    resetDrag();
  };

  const onMouseEnter = () => {
    stateRef.current.hover = true;
    clearAutoPlay();
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const state = stateRef.current;
    state.hover = false;

    if (state.pressDown) {
      state.pressDown = false;
      state.preventClick = false;
      state.endX = e.pageX;

      enableTransition();
      updateAfterDrag();
      resetDrag();
    }

    doAutoPlay();
  };

  const handleClickWrap = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const state = stateRef.current;
    if (state.preventClick) {
      e.preventDefault();
    }
    state.preventClick = false;
  };

  const handleClickDot = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { slideTo: i } = e.currentTarget.dataset;
    if (i) {
      const idx = parseInt(i, 10);
      goTo(idx);
    }
    e.preventDefault();
  };

  useImperativeHandle(
    ref,
    () => ({
      goTo,
      prev,
      next,
    }),
    [goTo, prev, next],
  );

  useEffect(() => {
    // should use ResizeObserver
    function handleResize() {
      stateRef.current.wrapWidth = wrapperRef.current.offsetWidth;
      slideTo(activeIndex);
    }

    if (stateRef.current.first) {
      handleResize();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [activeIndex, slideTo]);

  useEffect(() => {
    if (onChange && !stateRef.current.first) {
      onChange(activeIndex);
    }
  }, [activeIndex, onChange]);

  useEffect(() => {
    if (stateRef.current.first) {
      slideTo(activeIndex);
      stateRef.current.first = false;
    } else {
      slideTo(activeIndex, true);
    }
  }, [activeIndex, slideTo]);

  useEffect(() => {
    doAutoPlay();

    return () => {
      clearAutoPlay();
    };
  }, [autoPlay, activeIndex, doAutoPlay]);

  const events = draggable
    ? {
        onTouchStart: dragStart,
        onTouchMove: dragMove,
        onTouchEnd: dragEnd,
        onMouseDown: dragStart,
        onMouseMove: dragMove,
        onMouseUp: dragEnd,
        onMouseEnter,
        onMouseLeave,
        onClick: handleClickWrap,
      }
    : {
        onMouseEnter,
        onMouseLeave,
      };

  return (
    <div
      className={clsx(
        'Carousel',
        {
          'Carousel--draggable': draggable,
          'Carousel--rtl': rtl,
          'Carousel--dragging': isDragging,
        },
        className,
      )}
      ref={wrapperRef}
      {...events}
    >
      <div
        className="Carousel-inner"
        style={{ width: `${loop ? count + 2 : count}00%` }}
        ref={innerRef}
      >
        {loop && (
          <CarouselItem width={itemWith}>
            {React.Children.toArray(children)[count - 1]}
          </CarouselItem>
        )}
        {React.Children.map(children, (item, i) => (
          <CarouselItem width={itemWith} key={i}>
            {item}
          </CarouselItem>
        ))}
        {loop && (
          <CarouselItem width={itemWith}>{React.Children.toArray(children)[0]}</CarouselItem>
        )}
      </div>
      {dots && (
        <ol className="Carousel-indicators">
          {React.Children.map(children, (_, i) => (
            <li key={i}>
              <button
                className={clsx('Carousel-dot', { active: activeIndex === i })}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                data-slide-to={i}
                onClick={handleClickDot}
              />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
});
