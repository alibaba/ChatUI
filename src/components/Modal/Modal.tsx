import React from 'react';
import { Base, ModalProps, BaseModalHandle } from './Base';

export const Modal = React.forwardRef<BaseModalHandle, ModalProps>((props, ref) => (
  <Base
    baseClass="Modal"
    btnVariant={props.vertical === false ? undefined : 'outline'}
    ref={ref}
    {...props}
  />
));
