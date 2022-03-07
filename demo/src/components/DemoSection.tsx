import React from 'react';

interface DemoSectionProps {
  title: string;
  bg?: 'white' | 'gray-5';
  children: React.ReactNode;
}

export const DemoSection = ({ title, bg = 'white', children }: DemoSectionProps) => (
  <div className={`demo-section bg-${bg}`}>
    <h2 className="demo-section-title">{title}</h2>
    {children}
  </div>
);
