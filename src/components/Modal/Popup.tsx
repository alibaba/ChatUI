import React from 'react';
import { Base, PopupProps } from './Base';

export const Popup = (props: PopupProps) => (
  <Base baseClass="Popup" overflow {...props} />
);
