// import React from 'react';
// import { cleanup } from '@testing-library/react';

import { toast } from '..';

beforeEach(() => {
  jest.useFakeTimers();
});

describe('<Toast />', () => {

  it('should support type', () => {
    toast.success('ChatUI run success');
    expect(document.querySelectorAll('.Toast').length).toBe(1);
    jest.runAllTimers();
    expect(document.querySelectorAll('.Toast').length).toBe(0);
  });

  it('should support custom duration', () => {
    toast.success('ChatUI is running', 3000);
    jest.advanceTimersByTime(1500);
    expect(document.querySelectorAll('.Toast').length).toBe(1);
    jest.runAllTimers();
    expect(document.querySelectorAll('.Toast').length).toBe(0);
  });

});
