import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import useMount from '../../hooks/useMount';
import { Backdrop } from '../Backdrop';
import { IconButton } from '../IconButton';
import { Button, ButtonProps } from '../Button';
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
  height?: number | string;
  overflow?: boolean;
  actions?: ButtonProps[];
  vertical?: boolean;
  btnVariant?: ButtonProps['variant'];
  bgColor?: string;
  onClose?: () => void;
  onBackdropClick?: () => void;
};

function clearModal() {
  if (!document.querySelector('.Modal') && !document.querySelector('.Popup')) {
    toggleClass('S--modalOpen', false);
  }
}

export const Base: React.FC<ModalProps> = (props) => {
  const {
    baseClass,
    active,
    className,
    title,
    showClose = true,
    autoFocus = true,
    backdrop = true,
    height,
    overflow,
    actions,
    vertical = true,
    btnVariant,
    bgColor,
    children,
    onBackdropClick,
    onClose,
  } = props;

  const mid = useNextId('modal-');
  const titleId = props.titleId || mid;

  const wrapper = useRef<HTMLDivElement>(null);
  const { didMount, isShow } = useMount({ active, ref: wrapper });

  useEffect(() => {
    setTimeout(() => {
      if (autoFocus && wrapper.current) {
        wrapper.current.focus();
      }
    });
  }, [autoFocus]);

  useEffect(() => {
    if (isShow) {
      toggleClass('S--modalOpen', isShow);
    }
  }, [isShow]);

  useEffect(() => {
    if (!active && !didMount) {
      clearModal();
    }
  }, [active, didMount]);

  useEffect(
    () => () => {
      clearModal();
    },
    [],
  );

  if (!didMount) return null;

  const isPopup = baseClass === 'Popup';

  return createPortal(
    <div className={clsx(baseClass, className, { active: isShow })} ref={wrapper} tabIndex={-1}>
      {backdrop && (
        <Backdrop
          active={isShow}
          onClick={backdrop === true ? onBackdropClick || onClose : undefined}
        />
      )}
      <div
        className={clsx(`${baseClass}-dialog`, { 'pb-safe': isPopup && !actions })}
        data-bg-color={bgColor}
        data-height={isPopup && height ? height : undefined}
        role="dialog"
        aria-labelledby={titleId}
        aria-modal
      >
        <div className={`${baseClass}-content`}>
          <div className={`${baseClass}-header`}>
            <h5 className={`${baseClass}-title`} id={titleId}>
              {title}
            </h5>
            {showClose && onClose && (
              <IconButton
                className={`${baseClass}-close`}
                icon="close"
                size="lg"
                onClick={onClose}
                aria-label="关闭"
              />
            )}
          </div>
          <div className={clsx(`${baseClass}-body`, { overflow })}>{children}</div>
          {actions && (
            <div
              className={`${baseClass}-footer ${baseClass}-footer--${vertical ? 'v' : 'h'}`}
              data-variant={btnVariant || 'round'}
            >
              {actions.map((item) => (
                <Button size="lg" block={isPopup} variant={btnVariant} {...item} key={item.label} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
