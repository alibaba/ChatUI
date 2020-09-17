import React from 'react';
import { Base, ModalProps } from './Base';

export const Modal: React.FC<ModalProps> = (props) => {
  return <Base baseClass="Modal" {...props} />;
};
