import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import useMount from '../../hooks/useMount';
import { Backdrop } from '../Backdrop';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import useNextId from '../../hooks/useNextId';
import toggleClass from '../../utils/toggleClass';

export type ModalProps = {
  active?: boolean;
  baseClass?: string;
  className?: string;
  title?: string;
  titleId?: string;
  showClose?: boolean;
  autoFocus?: boolean;
  backdrop?: boolean | 'static';
  overflow?: boolean;
  actions?: any[]; // TODO
  vertical?: boolean;
  onClose?: () => void;
};

export const Base: React.FC<ModalProps> = (props) => {
  const {
    baseClass,
    active,
    className,
    title,
    titleId = useNextId('modal-'),
    showClose = true,
    autoFocus,
    backdrop = true,
    overflow,
    actions,
    vertical = true,
    children,
    onClose,
  } = props;

  const wrapper = useRef<HTMLDivElement>(null);
  const { didMount, isShow } = useMount({ active, ref: wrapper });

  useEffect(() => {
    if (autoFocus && wrapper.current) {
      wrapper.current.focus();
    }
  }, [didMount]);

  useEffect(() => {
    toggleClass('S--modalOpen', isShow);
  }, [isShow]);

  if (!didMount) return null;

  return createPortal(
    <div className={clsx(baseClass, className, { active: isShow })} ref={wrapper} tabIndex={0}>
      {backdrop && (
        <Backdrop active={isShow} onClick={backdrop === true && onClose ? onClose : undefined} />
      )}
      <div className={`${baseClass}-dialog`} role="dialog" aria-labelledby={titleId} aria-modal>
        <div className={`${baseClass}-content`}>
          <div className={`${baseClass}-header`}>
            <h5 className={`${baseClass}-title`} id={titleId}>
              {title}
            </h5>
            {showClose && onClose && (
              <IconButton
                className={`${baseClass}-close`}
                icon="close"
                onClick={onClose}
                aria-label="关闭"
              />
            )}
          </div>
          <div className={clsx(`${baseClass}-body`, { overflow })}>{children}</div>
          {actions && (
            <div className={`${baseClass}-footer ${baseClass}-footer--${vertical ? 'v' : 'h'}`}>
              {actions.map((item, i) => (
                <Button {...item} key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
