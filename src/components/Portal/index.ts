import { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

export type PortalProps = {
  container?: {};
  onRendered: () => void;
};

function getContainer(el: any) {
  return typeof el === 'function' ? el() : el;
}
export const Portal: React.FC<PortalProps> = (props) => {
  const { children, container = document.body, onRendered } = props;
  const mountNode = getContainer(container);

  useLayoutEffect(() => {
    if (onRendered && mountNode) {
      onRendered();
    }
  }, [mountNode, onRendered]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};
