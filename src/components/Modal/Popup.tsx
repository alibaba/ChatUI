import React from 'react';
import { Base, ModalProps, BaseModalHandle } from './Base';

export const Popup = React.forwardRef<BaseModalHandle, ModalProps>((props, ref) => (
  <Base baseClass="Popup" overflow ref={ref} {...props} />
));
