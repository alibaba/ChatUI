import React, { createRef } from 'react';
import clsx from 'clsx';
import canUse from '../../utils/canUse';
import { setTransform, setTransition } from '../../utils/style';

const formElements = ['TEXTAREA', 'OPTION', 'INPUT', 'SELECT'];

export type CarouselProps = typeof Carousel.defaultProps & {
  className?: string;
  // duration?: number;
  // easing?: string;
  // startIndex?: number;
  // draggable?: boolean;
  // multipleDrag?: boolean;
  // threshold?: number;
  // loop?: boolean;
  // rtl?: boolean;
  // indicators?: boolean;
  // autoplay?: boolean;
  // autoplaySpeed?: number;
  onChange?: () => void;
};

export interface CarouselState {
  currentSlide: number;
}

interface DragProps {
  startX: number;
  endX: number;
  startY: number;
  letItGo: boolean | null;
  preventClick: boolean;
}

class Carousel extends React.Component<CarouselProps, CarouselState> {
  private wrapperRef = createRef<HTMLDivElement>();

  private innerRef = createRef<HTMLDivElement>();

  len = 0;

  selectorWidth = 0;

  pointerDown = false;

  autoPlayTimer: any = 0;

  drag: DragProps = {
    startX: 0,
    endX: 0,
    startY: 0,
    letItGo: null,
    preventClick: false,
  };

  static defaultProps = {
    duration: 300,
    easing: 'ease',
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    indicators: true,
    autoplay: false,
    autoplaySpeed: 3000,
    onChange: () => {},
  };

  constructor(props: CarouselProps) {
    super(props);

    const { startIndex, children } = this.props;
    this.len = children ? React.Children.count(children) : 0;

    this.state = {
      currentSlide: Math.max(0, Math.min(startIndex, this.len - 1)),
    };
  }

  componentDidMount() {
    const wrap = this.wrapperRef.current;
    if (wrap) {
      this.selectorWidth = wrap.offsetWidth;
      this.attachEvents();
    }

    if (this.props.autoplay) {
      this.autoPlay();
    }

    if (this.state.currentSlide !== 0) {
      this.slideToCurrent();
    }
  }

  attachEvents() {
    const { draggable } = this.props;

    if (!draggable) return;

    this.pointerDown = false;
    this.drag = {
      startX: 0,
      endX: 0,
      startY: 0,
      letItGo: null,
      preventClick: false,
    };

    const wrapper = this.wrapperRef.current;
    const passive = canUse('passiveListener') ? { passive: false } : false;

    if (wrapper) {
      wrapper.addEventListener('touchstart', this.touchStart);
      wrapper.addEventListener('touchmove', this.touchMove, passive);
      wrapper.addEventListener('touchend', this.touchEnd);
    }
  }

  detachEvents() {
    const wrapper = this.wrapperRef.current;

    if (wrapper) {
      wrapper.removeEventListener('touchstart', this.touchStart);
      wrapper.removeEventListener('touchmove', this.touchMove);
      wrapper.removeEventListener('touchend', this.touchEnd);
    }
  }

  setTranslateX(offset: number) {
    const el = this.innerRef.current;
    if (el) {
      setTransform(el, `translate3d(${offset}px, 0, 0)`);
    }
  }

  enableTransition() {
    const { easing, duration } = this.props;
    const el = this.innerRef.current;
    if (el) {
      setTransition(el, `all ${duration}ms ${easing}`);
    }
  }

  disableTransition() {
    const { easing } = this.props;
    const el = this.innerRef.current;
    if (el) {
      setTransition(el, `all 0ms ${easing}`);
    }
  }

  touchStart = (e: TouchEvent) => {
    const ignore = formElements.indexOf((e.target as Element).nodeName) !== -1;
    if (ignore) return;

    e.stopPropagation();
    this.pointerDown = true;
    this.drag.startX = e.touches[0].pageX;
    this.drag.startY = e.touches[0].pageY;

    this.autoPlayClear();
  };

  touchMove = (e: TouchEvent) => {
    e.stopPropagation();

    const touch = e.touches[0];

    if (this.drag.letItGo === null) {
      // eslint-disable-next-line max-len
      this.drag.letItGo =
        Math.abs(this.drag.startY - touch.pageY) < Math.abs(this.drag.startX - touch.pageX);
    }

    if (this.pointerDown && this.drag.letItGo) {
      e.preventDefault();
      this.drag.endX = touch.pageX;

      const { rtl } = this.props;
      const { currentSlide } = this.state;
      const currentOffset = currentSlide * this.selectorWidth;
      let dragOffset = this.drag.endX - this.drag.startX;

      if (
        (currentSlide === 0 && dragOffset > 0) ||
        (currentSlide === this.len - 1 && dragOffset < 0)
      ) {
        // 阻尼
        dragOffset *= 0.35;
      }

      const offset = rtl ? currentOffset + dragOffset : (currentOffset - dragOffset) * -1;

      this.disableTransition();
      this.setTranslateX(offset);
    }
  };

  touchEnd = (e: TouchEvent) => {
    const { autoplay } = this.props;
    e.stopPropagation();
    this.pointerDown = false;
    this.enableTransition();
    if (this.drag.endX) {
      this.updateAfterDrag();
    }
    this.clearDrag();
    if (autoplay) {
      this.autoPlay();
    }
  };

  clearDrag() {
    this.drag = {
      startX: 0,
      endX: 0,
      startY: 0,
      letItGo: null,
      preventClick: this.drag.preventClick,
    };
  }

  slideToCurrent() {
    const { rtl } = this.props;
    const { currentSlide } = this.state;
    const offset = (rtl ? 1 : -1) * currentSlide * this.selectorWidth;

    this.setTranslateX(offset);
  }

  goTo(index: number, callback?: () => void) {
    if (this.len <= 1) return;

    const { onChange } = this.props;
    const { currentSlide } = this.state;

    this.setState({
      currentSlide: Math.min(Math.max(index, 0), this.len - 1),
    });

    // eslint-disable-next-line react/destructuring-assignment
    if (currentSlide !== this.state.currentSlide) {
      this.slideToCurrent();
      onChange.call(this);
      if (callback) {
        callback.call(this);
      }
    }
  }

  prev(howManySlides = 1, callback?: () => void) {
    const { currentSlide } = this.state;
    const index = Math.max(currentSlide - howManySlides, 0);

    this.goTo(index, callback);
  }

  next(howManySlides = 1, callback?: () => void) {
    const { currentSlide } = this.state;
    const index = Math.min(currentSlide + howManySlides, this.len - 1);

    this.goTo(index, callback);
  }

  updateAfterDrag() {
    const { rtl, multipleDrag, threshold } = this.props;
    const { len } = this;

    const movement = (rtl ? -1 : 1) * (this.drag.endX - this.drag.startX);
    const movementDistance = Math.abs(movement);
    const howManySliderToSlide = multipleDrag
      ? Math.ceil(movementDistance / this.selectorWidth)
      : 1;

    if (movement > 0 && movementDistance > threshold && len > 1) {
      this.prev(howManySliderToSlide);
    } else if (movement < 0 && movementDistance > threshold && len > 1) {
      this.next(howManySliderToSlide);
    }

    this.slideToCurrent();
  }

  autoPlayClear() {
    if (this.autoPlayTimer) {
      clearInterval(this.autoPlayTimer);
    }
  }

  autoPlay() {
    const { autoplaySpeed } = this.props;
    this.enableTransition();
    this.autoPlayClear();
    this.autoPlayTimer = setInterval(this.autoPlayIterator, autoplaySpeed);
  }

  autoPlayIterator = () => {
    const { loop } = this.props;
    const { currentSlide } = this.state;
    const isLastSlide = currentSlide === this.len - 1;

    if (isLastSlide) {
      if (loop) {
        this.goTo(0);
      } else {
        this.autoPlayClear();
      }
    } else {
      this.next();
    }
  };

  render() {
    const { className, indicators, children } = this.props;
    const { currentSlide } = this.state;
    const len = React.Children.count(children);

    return (
      <div className={clsx('Carousel', className)} ref={this.wrapperRef}>
        <div className="Carousel-inner" style={{ width: `${len}00%` }} ref={this.innerRef}>
          {React.Children.map(children, (item, i) => (
            <div className="Carousel-item" style={{ width: `${100 / len}%` }} key={i}>
              {item}
            </div>
          ))}
        </div>
        {indicators && (
          <ol className="Carousel-indicators">
            {React.Children.map(children, (_, i) => (
              <li className={clsx({ active: currentSlide === i })} key={i} />
            ))}
          </ol>
        )}
      </div>
    );
  }
}

export default Carousel;
