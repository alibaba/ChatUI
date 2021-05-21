import React, { createRef } from 'react';
import clsx from 'clsx';
import { setTransform } from '../../utils/style';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Button } from '../Button';
import canUse from '../../utils/canUse';

const canPassive = canUse('passiveListener');
const listenerOpts = canPassive ? { passive: true } : false;
const listenerOptsWithoutPassive = canPassive ? { passive: false } : false;

type PullToRefreshStatus = 'pending' | 'pull' | 'active' | 'loading';

export type PullToRefreshProps = typeof PullToRefresh.defaultProps & {
  maxDistance?: number;
  onRefresh?: () => Promise<any>;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  renderIndicator?: (status: PullToRefreshStatus, distance: number) => React.ReactNode;
};

type PullToRefreshState = {
  distance: number;
  status: PullToRefreshStatus;
  dropped: boolean;
  disabled: boolean;
};

export class PullToRefresh extends React.Component<PullToRefreshProps, PullToRefreshState> {
  wrapperRef = createRef<HTMLDivElement>();

  contentRef = createRef<HTMLDivElement>();

  startY = 0;

  useFallback: boolean;

  canPull: boolean = false;

  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    distance: 30,
    loadingDistance: 30,
    distanceRatio: 2,
    loadMoreText: '点击加载更多',
    renderIndicator(status: PullToRefreshStatus) {
      if (status === 'active' || status === 'loading') {
        return <Icon className="PullToRefresh-spinner" type="spinner" spin />;
      }
      return null;
    },
  };

  constructor(props: PullToRefreshProps) {
    super(props);
    this.state = {
      distance: 0,
      status: 'pending', // pending | pull | active | loading
      dropped: false,
      disabled: !props.onRefresh,
    };
    this.useFallback = !canUse('touch');
  }

  componentDidMount() {
    const { disabled } = this.state;
    if (disabled || this.useFallback) return;

    const wrapper = this.wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('touchstart', this.touchStart, listenerOpts);
      wrapper.addEventListener('touchmove', this.touchMove, listenerOptsWithoutPassive);
      wrapper.addEventListener('touchend', this.touchEnd);
      wrapper.addEventListener('touchcancel', this.touchEnd);
    }
  }

  setContentStyle(y: number) {
    const content = this.contentRef.current;
    if (content) {
      setTransform(content, `translate3d(0px,${y}px,0)`);
    }
  }

  touchStart = (e: TouchEvent) => {
    this.startY = e.touches[0].clientY;
    this.canPull = this.wrapperRef.current!.scrollTop === 0;

    if (this.canPull) {
      this.setState({
        status: 'pull',
        dropped: false,
      });
    }
  };

  touchMove = (e: TouchEvent) => {
    const { distance, maxDistance, distanceRatio } = this.props;
    const { status } = this.state;
    const currentY = e.touches[0].clientY;

    if (!this.canPull || currentY < this.startY || status === 'loading') return;

    let dist = (currentY - this.startY) / distanceRatio;

    if (maxDistance && dist > maxDistance) {
      dist = maxDistance;
    }

    if (dist > 0) {
      if (e.cancelable) {
        e.preventDefault();
      }
      e.stopPropagation();

      this.setContentStyle(dist);

      this.setState({
        distance: dist,
        status: dist >= distance ? 'active' : 'pull',
      });
    }
  };

  touchEnd = () => {
    const { status } = this.state;

    this.setState({ dropped: true });

    if (status === 'active') {
      this.handleLoadMore();
    } else {
      this.reset();
    }
  };

  scrollTo = ({ y, animated = true }: { y: number; animated: boolean }) => {
    const scroller = this.wrapperRef.current;

    if (canUse('smoothScroll') && animated) {
      scroller!.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    } else {
      scroller!.scrollTop = y;
    }
  };

  scrollToEnd = ({ animated = true } = {}) => {
    const scroller = this.wrapperRef.current;
    const y = scroller!.scrollHeight - scroller!.offsetHeight;

    this.scrollTo({ y, animated });
  };

  handleLoadMore = () => {
    const { loadingDistance, onRefresh } = this.props;
    const scroller = this.wrapperRef.current;

    this.setState({ status: 'loading' }, () => {
      if (!this.useFallback) {
        this.setContentStyle(loadingDistance);
      }
    });

    try {
      const sh = scroller!.scrollHeight;

      onRefresh!().then((res) => {
        const handleOffset = () => {
          this.scrollTo({
            y: scroller!.scrollHeight - sh - 50,
            animated: false,
          });
        };

        // 考虑做成可配置
        handleOffset();
        setTimeout(handleOffset, 150);
        setTimeout(handleOffset, 300);

        this.reset();

        if (res && res.noMore) {
          this.setState({ disabled: true });
        }
      });
    } catch (ex) {
      // eslint-disable-next-line no-console
      console.error(ex);
      this.reset();
    }
  };

  reset() {
    this.setState({
      distance: 0,
      status: 'pending',
    });
    this.setContentStyle(0);
  }

  render() {
    const { renderIndicator, loadMoreText, children, onScroll } = this.props;
    const { status, distance, dropped, disabled } = this.state;

    return (
      <div className="PullToRefresh" ref={this.wrapperRef} onScroll={onScroll}>
        <div className="PullToRefresh-inner">
          <div
            className={clsx('PullToRefresh-content', {
              'PullToRefresh-transition': dropped,
            })}
            ref={this.contentRef}
          >
            <div className="PullToRefresh-indicator">{renderIndicator(status, distance)}</div>
            {!disabled && this.useFallback && (
              <Flex className="PullToRefresh-fallback" center>
                {renderIndicator(status, distance)}
                <Button
                  className="PullToRefresh-loadMore"
                  variant="text"
                  onClick={this.handleLoadMore}
                >
                  {loadMoreText}
                </Button>
              </Flex>
            )}
            {React.Children.only(children)}
          </div>
        </div>
      </div>
    );
  }
}
