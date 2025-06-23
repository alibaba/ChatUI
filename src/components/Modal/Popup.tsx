import React from 'react';
import { Base, ModalProps } from './Base';

export const Popup = (props: ModalProps) => (
  <Base baseClass="Popup" overflow {...props} />
);
