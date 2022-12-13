import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import useMount from '../../hooks/useMount';
import useClickOutside from '../../hooks/useClickOutside';
import useWindowResize from '../../hooks/useWindowResize';

export type PopoverProps = {
  className?: string;
  active: boolean;
  target: HTMLElement;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Popover = (props: PopoverProps) => {
  const { className, active, target, children, onClose } = props;
  const wrapper = useClickOutside(onClose, 'mousedown');
  const { didMount, isShow } = useMount({ active, ref: wrapper });
  const [style, setStyle] = useState({});

  const updatePos = useCallback(() => {
    if (!wrapper.current) return;

    const targetRect = target.getBoundingClientRect();
    const rect = wrapper.current.getBoundingClientRect();

    setStyle({
      top: `${targetRect.top - rect.height}px`,
      left: `${targetRect.left}px`,
    });
  }, [target, wrapper]);

  useEffect(() => {
    if (wrapper.current) {
      wrapper.current.focus();
      updatePos();
    }
  }, [didMount, updatePos, wrapper]);

  useWindowResize(updatePos);

  if (!didMount) return null;

  return createPortal(
    <div className={clsx('Popover', className, { active: isShow })} ref={wrapper} style={style}>
      <div className="Popover-body">{children}</div>
      <svg className="Popover-arrow" viewBox="0 0 9 5">
        <polygon points="0,0 5,5, 9,0" />
      </svg>
    </div>,
    document.body,
  );
};
