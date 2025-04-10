import React, { useState, useRef, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import smoothScroll from '../../utils/smoothScroll';
import useNextId from '../../hooks/useNextId';

type TabItemProps = {
  active: boolean;
  index: number;
  tabIndex: number;
  onClick: (index: number, event: React.MouseEvent) => void;
};

const TabItem: React.FC<TabItemProps> = (props) => {
  const { active, index, children, onClick, ...others } = props;

  function handleClick(e: React.MouseEvent) {
    onClick(index, e);
  }

  return (
    <div className="Tabs-navItem">
      <button
        className={clsx('Tabs-navLink', { active })}
        type="button"
        role="tab"
        aria-selected={active}
        onClick={handleClick}
        {...others}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

type TabsPaneProps = {
  active: boolean;
  id?: string;
};

const TabsPane: React.FC<TabsPaneProps> = (props) => {
  const { active, children, ...others } = props;

  return (
    <div className={clsx('Tabs-pane', { active })} {...others} role="tabpanel">
      {children}
    </div>
  );
};

export type TabsProps = {
  className?: string;
  index?: number;
  scrollable?: boolean;
  hideNavIfOnlyOne?: boolean;
  onChange?: (index: number, event: React.MouseEvent) => void;
};

export const Tabs: React.FC<TabsProps> = (props) => {
  const { className, index: oIndex = 0, scrollable, hideNavIfOnlyOne, children, onChange } = props;
  const [pointerStyles, setPointerStyles] = useState({});
  const [index, setIndex] = useState(oIndex || 0);
  const indexRef = useRef(index);
  const navRef = useRef<HTMLDivElement>(null);
  const headers: Array<React.ReactNode> = [];
  const contents: Array<React.ReactNode> = [];
  const tabPaneId = useNextId('tabs-');

  function handleIndexChange(idx: number, e: React.MouseEvent) {
    setIndex(idx);
    if (onChange) {
      onChange(idx, e);
    }
  }

  React.Children.forEach(children, (item: any, idx) => {
    if (!item) return;

    const active = index === idx;
    const id = `${tabPaneId}-${idx}`;

    headers.push(
      <TabItem
        active={active}
        index={idx}
        key={id}
        onClick={handleIndexChange}
        aria-controls={id}
        tabIndex={active ? -1 : 0}
      >
        {item.props.label}
      </TabItem>,
    );

    if (item.props.children) {
      contents.push(
        <TabsPane active={active} key={id} id={id}>
          {item.props.children}
        </TabsPane>,
      );
    }
  });

  useEffect(() => {
    setIndex(oIndex);
  }, [oIndex]);

  const movePointer = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    const currentNav = nav.children[indexRef.current];
    if (!currentNav) return;

    const text = currentNav.querySelector('span');
    if (!text) return;

    const { offsetWidth: navWidth, offsetLeft: navOffsetLeft } = currentNav as HTMLElement;
    const { width: textWidth } = text.getBoundingClientRect();
    const pointerWidth = Math.max(textWidth - 16, 26);
    // 中心位的偏移量
    const offsetLeftOfCenter = navOffsetLeft + navWidth / 2;

    setPointerStyles({
      transform: `translateX(${offsetLeftOfCenter - pointerWidth / 2}px)`,
      width: `${pointerWidth}px`,
    });

    if (scrollable) {
      smoothScroll({
        el: nav,
        to: offsetLeftOfCenter - nav.offsetWidth / 2,
        x: true,
      });
    }
  }, [scrollable]);

  useEffect(() => {
    const nav = navRef.current;
    let ro: ResizeObserver;

    if (nav && 'ResizeObserver' in window) {
      ro = new ResizeObserver(movePointer);
      ro.observe(nav);
    }

    return () => {
      if (ro && nav) {
        ro.unobserve(nav);
      }
    };
  }, [movePointer]);

  useEffect(() => {
    indexRef.current = index;
    movePointer();
  }, [index, movePointer]);

  const needNav = headers.length > (hideNavIfOnlyOne ? 1 : 0);

  return (
    <div className={clsx('Tabs', { 'Tabs--scrollable': scrollable }, className)}>
      {needNav && (
        <div className="Tabs-nav" role="tablist" ref={navRef}>
          {headers}
          <span className="Tabs-navPointer" style={pointerStyles} />
        </div>
      )}
      <div className="Tabs-content">{contents}</div>
    </div>
  );
};
