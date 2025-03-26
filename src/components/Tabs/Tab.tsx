import React from 'react';

export interface TabProps {
  label: string;
}

export const Tab: React.FC<TabProps> = ({ children }) => <div>{children}</div>;
