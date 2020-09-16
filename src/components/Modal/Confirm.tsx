import React from 'react';
import { Base, ModalProps } from './Base';

export const Confirm: React.FC<ModalProps> = (props) => {
  return <Base baseClass="Modal" className="Confirm" showClose={false} {...props} />;
};
