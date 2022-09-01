import React, { useState, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import clsx from 'clsx';
import { setTransform } from '../../utils/style';
import { Icon } from '../Icon';
import { Flex } from '../Flex';
import { Button } from '../Button';
import canUse from '../../utils/canUse';
import smoothScroll from '../../utils/smoothScroll';

const canPassive = canUse('passiveListener');
const listenerOpts = canPassive ? { passive: true } : false;
const listenerOptsWithoutPassive = canPassive ? { passive: false } : false;

type PullToRefreshStatus = 'pending' | 'pull' | 'active' | 'loading';

export interface PullToRefreshProps {
  distance?: number;
  loadingDistance?: number;
  distanceRatio?: number;
  loadMoreText?: string;
  maxDistance?: number;
  onRefresh?: () => Promise<any>;
  onScroll?: (event: React.UIEvent<HTMLDivElement, UIEvent>) => void;
  renderIndicator?: (status: PullToRefreshStatus, distance: number) => React.ReactNode;
  children: React.ReactNode;
}

export interface ScrollToEndOptions {
  animated?: boolean;
  force?: boolean;
}

interface PTRScrollToOptions extends ScrollToEndOptions {
  y: number | '100%';
}

export interface PullToRefreshHandle {
  scrollTo: (opts: PTRScrollToOptions) => void;
  scrollToEnd: (opts?: ScrollToEndOptions) => void;
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export const PullToRefresh = React.forwardRef<PullToRefreshHandle, PullToRefreshProps>(
  (props, ref) => {
    const {
      distance: oDistance = 30,
      loadingDistance = 30,
      maxDistance,
      distanceRatio = 2,
      loadMoreText = '点击加载更多',
      children,
      onScroll,
      onRefresh,
      renderIndicator = (status: PullToRefreshStatus) => {
        if (status === 'active' || status === 'loading') {
          return <Icon className="PullToRefresh-spinner" type="spinner" spin />;
        }
        return null;
      },
    } = props;

    const wrapperRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const [distance, setDistance] = useState(0);
    const [status, setStatus] = useState<PullToRefreshStatus>('pending');
    const [dropped, setDropped] = useState(false);
    const [disabled, setDisabled] = useState(!props.onRefresh);
    const sharedRef = useRef<any>({});
    const statusRef = useRef<PullToRefreshStatus>(status);
    const timer1 = useRef<ReturnType<typeof setTimeout>>();
    const timer2 = useRef<ReturnType<typeof setTimeout>>();

    const useFallback = !canUse('touch');

    useEffect(() => {
      statusRef.current = status;
    }, [status]);

    const setContentStyle = (y: number) => {
      const content = contentRef.current;
      if (content) {
        setTransform(content, `translate3d(0px,${y}px,0)`);
      }
    };

    const scrollTo = ({ y, animated = true }: PTRScrollToOptions) => {
      const scroller = wrapperRef.current;

      if (!scroller) return;

      const offsetTop = y === '100%' ? scroller.scrollHeight - scroller.offsetHeight : y;

      if (animated) {
        smoothScroll({
          el: scroller,
          to: offsetTop,
          x: false,
        });
      } else {
        scroller.scrollTop = offsetTop;
      }
    };

    const scrollToEnd = useCallback(({ animated = true }: ScrollToEndOptions = {}) => {
      scrollTo({ y: '100%', animated });
    }, []);

    const reset = useCallback(() => {
      setDistance(0);
      setStatus('pending');
      setContentStyle(0);
    }, []);

    const handleLoadMore = useCallback(() => {
      const scroller = wrapperRef.current;

      if (!scroller) return;

      setStatus('loading');

      try {
        const sh = scroller.scrollHeight;

        onRefresh!().then((res) => {
          const handleOffset = () => {
            scrollTo({
              y: scroller.scrollHeight - sh - 50,
              animated: false,
            });
          };

          clearTimeout(timer1.current);
          clearTimeout(timer2.current);
          handleOffset();
          timer1.current = setTimeout(handleOffset, 150);
          timer2.current = setTimeout(handleOffset, 250);

          reset();

          if (res && res.noMore) {
            setDisabled(true);
          }
        });
      } catch (ex) {
        // eslint-disable-next-line no-console
        console.error(ex);
        reset();
      }
    }, [onRefresh, reset]);

    const touchStart = (e: TouchEvent) => {
      sharedRef.current.startY = e.touches[0].clientY;
      sharedRef.current.canPull = wrapperRef.current && wrapperRef.current.scrollTop <= 0;

      if (sharedRef.current.canPull) {
        setStatus('pull');
        setDropped(false);
      }
    };

    const touchMove = useCallback(
      (e: TouchEvent) => {
        const currentY = e.touches[0].clientY;

        const { canPull, startY } = sharedRef.current;

        if (!canPull || currentY < startY || statusRef.current === 'loading') return;

        let dist = (currentY - startY) / distanceRatio;
        if (maxDistance && dist > maxDistance) {
          dist = maxDistance;
        }

        if (dist > 0) {
          if (e.cancelable) {
            e.preventDefault();
          }
          e.stopPropagation();

          setContentStyle(dist);
          setDistance(dist);
          setStatus(dist >= oDistance ? 'active' : 'pull');
        }
      },
      [distanceRatio, maxDistance, oDistance],
    );

    const touchEnd = useCallback(() => {
      setDropped(true);

      if (statusRef.current === 'active') {
        handleLoadMore();
      } else {
        reset();
      }
    }, [handleLoadMore, reset]);

    useEffect(() => {
      const wrapper = wrapperRef.current;

      if (!wrapper || useFallback) return;

      if (disabled) {
        wrapper.removeEventListener('touchstart', touchStart);
        wrapper.removeEventListener('touchmove', touchMove);
        wrapper.removeEventListener('touchend', touchEnd);
        wrapper.removeEventListener('touchcancel', touchEnd);
      } else {
        wrapper.addEventListener('touchstart', touchStart, listenerOpts);
        wrapper.addEventListener('touchmove', touchMove, listenerOptsWithoutPassive);
        wrapper.addEventListener('touchend', touchEnd);
        wrapper.addEventListener('touchcancel', touchEnd);
      }
    }, [disabled, touchEnd, touchMove, useFallback]);

    useEffect(() => {
      if (status === 'loading' && !useFallback) {
        setContentStyle(loadingDistance);
      }
    }, [loadingDistance, status, useFallback]);

    useImperativeHandle(
      ref,
      () => ({
        scrollTo,
        scrollToEnd,
        wrapperRef,
      }),
      [scrollToEnd],
    );

    return (
      <div className="PullToRefresh" ref={wrapperRef} onScroll={onScroll}>
        <div className="PullToRefresh-inner">
          <div
            className={clsx('PullToRefresh-content', {
              'PullToRefresh-transition': dropped,
            })}
            ref={contentRef}
          >
            <div className="PullToRefresh-indicator">{renderIndicator(status, distance)}</div>
            {!disabled && useFallback && (
              <Flex className="PullToRefresh-fallback" center>
                {renderIndicator(status, oDistance)}
                <Button className="PullToRefresh-loadMore" variant="text" onClick={handleLoadMore}>
                  {loadMoreText}
                </Button>
              </Flex>
            )}
            {React.Children.only(children)}
          </div>
        </div>
      </div>
    );
  },
);
