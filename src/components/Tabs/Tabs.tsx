import React, { useState, useRef, useEffect } from 'react';
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
        {children}
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
    <div className={clsx('Tabs-pane', { active })} {...others}>
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
  const navRef = useRef<HTMLElement>(null);
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
        key={idx}
        onClick={handleIndexChange}
        aria-controls={id}
        tabIndex={active ? -1 : 0}
      >
        {item.props.label}
      </TabItem>,
    );

    if (item.props.children) {
      contents.push(
        <TabsPane active={active} key={idx} id={id}>
          {item.props.children}
        </TabsPane>,
      );
    }
  });

  useEffect(() => {
    setIndex(oIndex);
  }, [oIndex]);

  function movePointer() {
    const nav = navRef.current;
    if (!nav) return;

    const tab = nav.children[indexRef.current].firstChild;
    if (!tab) return;

    const { offsetWidth: tabWidth, offsetLeft: tabOffsetLeft } = tab as HTMLElement;

    setPointerStyles({
      transform: `translateX(${tabOffsetLeft}px)`,
      width: `${tabWidth}px`,
    });

    if (scrollable) {
      smoothScroll({
        el: nav,
        to: tabOffsetLeft + tabWidth / 2 - nav.offsetWidth / 2,
        x: true,
      });
    }
  }

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
  }, []);

  useEffect(() => {
    indexRef.current = index;
    movePointer();
  }, [index]);

  const needNav = headers.length > (hideNavIfOnlyOne ? 1 : 0);

  return (
    <div className={clsx('Tabs', { 'Tabs--scrollable': scrollable }, className)}>
      {needNav && (
        <nav className="Tabs-nav" role="tablist" ref={navRef}>
          {headers}
          <span className="Tabs-navPointer" style={pointerStyles} />
        </nav>
      )}
      <div className="Tabs-content">{contents}</div>
    </div>
  );
};
