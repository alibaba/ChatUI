import React from 'react';
import { Base, ModalProps } from './Base';

export const Popup: React.FC<ModalProps> = (props) => {
  return <Base baseClass="Popup" overflow {...props} />;
};
