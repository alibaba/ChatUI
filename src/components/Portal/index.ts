import { useState, useEffect, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export interface PortalProps {
  container?: React.RefObject<any> | Element | (() => Element) | null;
  onRendered?: () => void;
}

function getEl(el: any) {
  if (!el) return null;

  if (el instanceof Element) {
    return el;
  }
  return typeof el === 'function' ? el() : el.current || el;
}

export const Portal: React.FC<PortalProps> = (props) => {
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
