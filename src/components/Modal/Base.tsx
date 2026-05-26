import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import useMount from '../../hooks/useMount';
import { Backdrop } from '../Backdrop';
import { IconButton } from '../IconButton';
import { Button, ButtonProps } from '../Button';
import useNextId from '../../hooks/useNextId';
import toggleClass from '../../utils/toggleClass';
import { useConfig } from '../ConfigProvider';

type BaseModalProps = {
  baseClass?: string;
  active?: boolean;
  className?: string;
  title?: React.ReactNode;
  titleId?: string;
  showClose?: boolean;
  autoFocus?: boolean;
  backdrop?: boolean | 'static';
  actions?: ButtonProps[];
  vertical?: boolean;
  bgColor?: string;
  bodyAlign?: 'left' | 'center';
  onClose?: () => void;
  onBackdropClick?: () => void;
  children?: React.ReactNode;
};

export type ModalProps = BaseModalProps & {
  avatar?: string;
};

export type PopupProps = BaseModalProps & {
  subTitle?: string;
  logo?: string;
  actionsDesc?: React.ReactNode;
  height?: number | string;
  overflow?: boolean;
};

type InternalProps = BaseModalProps & ModalProps & PopupProps;

function clearModal() {
  if (!document.querySelector('.Modal') && !document.querySelector('.Popup')) {
    toggleClass('S--modalOpen', false);
  }
}

export const Base = (props: InternalProps) => {
  const {
    baseClass,
    active,
    className,
    title,
    subTitle,
    showClose = true,
    autoFocus = true,
    backdrop = true,
    height,
    overflow,
    actionsDesc,
    actions,
    vertical = true,
    bgColor,
    avatar,
    logo,
    bodyAlign,
    children,
    onBackdropClick,
    onClose,
  } = props;

  const mid = useNextId('modal-');
  const titleId = props.titleId || mid;
  const configCtx = useConfig();

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
  const hasAvatar = avatar && baseClass === 'Modal';
  const hasLogo = !!(isPopup && logo);
  const hasSubTitle = !!(isPopup && subTitle);

  return createPortal(
    <div
      className={clsx(baseClass, className, { active: isShow })}
      tabIndex={-1}
      data-elder-mode={configCtx.elderMode}
      ref={wrapper}
    >
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
        data-has-avatar={hasAvatar}
        role="dialog"
        aria-labelledby={titleId}
        aria-modal
      >
        <div className={`${baseClass}-content`}>
          {hasAvatar && (
            <div
              className={`${baseClass}-avatar`}
              style={{ '--avatar': `url(${avatar})` } as React.CSSProperties}
            />
          )}
          <div
            className={`${baseClass}-header`}
            data-has-logo={hasLogo}
            data-has-sub-title={hasSubTitle}
          >
            {hasLogo ? (
              <div className={`${baseClass}-headerText`}>
                <img className={`${baseClass}-logo`} src={logo} alt="" />
                <h5 className={`${baseClass}-title`} id={titleId}>
                  {title}
                </h5>
                {subTitle && <h6 className={`${baseClass}-subtitle`}>{subTitle}</h6>}
              </div>
            ) : (
              <>
                <h5 className={`${baseClass}-title`} id={titleId}>
                  {title}
                </h5>
                {subTitle && <h6 className={`${baseClass}-subtitle`}>{subTitle}</h6>}
              </>
            )}
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
          <div className={clsx(`${baseClass}-body`, { overflow })} data-align={bodyAlign}>
            {children}
          </div>
          {(actions || actionsDesc) && (
            <div className={`${baseClass}-footer ${baseClass}-footer--${vertical ? 'v' : 'h'}`}>
              {isPopup && actionsDesc && (
                <div className={`${baseClass}-actionsDesc`}>{actionsDesc}</div>
              )}
              {actions &&
                actions.map((item) => (
                  <Button size="lg" block={isPopup} {...item} key={item.label} />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};
