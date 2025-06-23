import React from 'react';

export interface TabProps {
  children?: React.ReactNode;
}

export const Tab = ({ children }: TabProps) => <div>{children}</div>;
