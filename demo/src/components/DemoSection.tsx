import React from 'react';

interface DemoSectionProps {
  title: string;
  bg?: 'white' | 'gray';
  children: React.ReactNode;
}

export const DemoSection = ({ title, bg = 'white', children }: DemoSectionProps) => (
  <div className={`demo-section bg-${bg}`}>
    <h2 className="demo-section-title">{title}</h2>
    {children}
  </div>
);
