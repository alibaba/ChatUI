import React from 'react';
import { ClickOutside } from '../ClickOutside';

interface AccessoryWrapProps {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export const AccessoryWrap = ({ onClickOutside, children }: AccessoryWrapProps) => (
  <ClickOutside onClick={onClickOutside}>{children}</ClickOutside>
);
