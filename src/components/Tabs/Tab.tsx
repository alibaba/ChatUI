import React from 'react';

export interface TabProps {
  label: string;
  children?: React.ReactNode;
}

export const Tab = React.forwardRef<HTMLDivElement, TabProps>(({ children }, ref) => (
  <div ref={ref}>{children}</div>
));
