import React from 'react';
import { Base, ModalProps } from './Base';

export const Modal = (props: ModalProps) => (
  <Base
    baseClass="Modal"
    btnVariant={props.vertical === false ? undefined : 'outline'}
    {...props}
  />
);
