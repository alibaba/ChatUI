import React from 'react';

interface DemoSectionProps {
  title: string;
  bg?: 'white' | 'light-1' | 'light-2';
  children: React.ReactNode;
}

export const DemoSection = ({ title, bg = 'white', children }: DemoSectionProps) => (
  <div className={`demo-section bg-${bg}`}>
    <h2 className="demo-section-title">{title}</h2>
    {children}
  </div>
);
