import { useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

type Container = React.RefObject<any> | Element | (() => Element) | null;

export interface PortalProps {
  container?: Container;
  onRendered?: () => void;
  children?: React.ReactNode;
}

function getEl(el: Container) {
  if (!el) return null;

  if (el instanceof Element) {
    return el;
  }
  return typeof el === 'function' ? el() : el.current || el;
}

export const Portal = (props: PortalProps) => {
  const { children, container = document.body, onRendered } = props;
  const [mountNode, setMountNode] = useState<Element | null>(null);

  useEffect(() => {
    setMountNode(getEl(container));
  }, [container]);

  useLayoutEffect(() => {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [mountNode, onRendered]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
