import React from 'react';

export interface TabProps {
  label: string;
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => <div>{children}</div>;
