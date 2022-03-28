import React from 'react';
import clsx from 'clsx';
import { Base, ModalProps } from './Base';

export const Confirm: React.FC<ModalProps> = ({ className, ...other }) => (
  <Base baseClass="Modal" className={clsx('Confirm', className)} showClose={false} {...other} />
);
