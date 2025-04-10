import React from 'react';
import clsx from 'clsx';
import { Base, ModalProps } from './Base';
import { useLocale } from '../ConfigProvider';
import { ButtonProps } from '../Button';

const isPrimary = (btn: ButtonProps) => btn.color === 'primary';

export const Confirm: React.FC<ModalProps> = ({
  className,
  vertical: oVertical,
  actions,
  ...other
}) => {
  const { locale = '' } = useLocale();
  const isZh = locale.includes('zh');
  // 中文默认横排
  const vertical = oVertical != null ? oVertical : !isZh;

  if (Array.isArray(actions)) {
    // 主按钮排序：横排主按钮在后，竖排主按钮在前
    actions.sort((a, b) => {
      if (isPrimary(a)) {
        return vertical ? -1 : 1;
      }
      if (isPrimary(b)) {
        return vertical ? 1 : -1;
      }
      return 0;
    });
  }

  return (
    <Base
      baseClass="Modal"
      className={clsx('Confirm', className)}
      showClose={false}
      btnVariant="outline"
      vertical={vertical}
      actions={actions}
      {...other}
    />
  );
};
