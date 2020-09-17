import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Navbar } from '..';

afterEach(cleanup);

describe('<Navbar />', () => {
  it('should support leftContent', () => {
    const title = 'Hello ChatUI';
    const leftContent = {
      icon: 'chevron-left',
      onClick: jest.fn(),
    };
    const { container } = render(<Navbar
      title={title}
      leftContent={leftContent}
    />);
    expect(container.querySelectorAll('.Navbar-left .IconBtn').length).toBe(1);
  });

  it('should support rightContent', () => {
    const title = 'Hello ChatUI';
    const rightContent = [{
      icon: 'apps',
      type: 'apps',
      onClick: jest.fn(),
    }, {
      icon: 'cart',
      type: 'cart',
      onClick: jest.fn(),
    }];
    const { container } = render(<Navbar
      title={title}
      rightContent={rightContent}
    />);
    expect(container.querySelectorAll('.Navbar-right .IconBtn').length).toBe(2);
  });
});
