import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toPascalCase } from '../utils';

interface DemoPageProps {
  children: React.ReactNode;
}

export const DemoPage = ({ children }: DemoPageProps) => {
  const { pathname } = useLocation();
  const name = pathname.slice(1);

  return (
    <div className="demo-page" data-page={name}>
      <div className="demo-header">
        <Link className="demo-header-back" to="/" aria-label="Back">
          <svg viewBox="0 0 1000 1000">
            <path d="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z" />
          </svg>
        </Link>
        <h1 className="demo-header-title">{toPascalCase(name)}</h1>
      </div>
      {children}
    </div>
  );
};
