import { cleanup, act } from '@testing-library/react';
import { toast } from '..';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(cleanup);

describe('<Toast />', () => {
  it('should show a toast', () => {
    toast.show('test', 'test');

    expect(document.querySelector('.Toast')).not.toBeNull();

    act(() => {
      jest.runAllTimers();
    });
    expect(document.querySelector('.Toast')).toBeNull();
  });

  it('should show a toast (success)', () => {
    toast.success('test');

    const element = document.querySelector('.Toast');
    expect(element).toHaveAttribute('data-type', 'success');
    expect(element).toContainHTML('<use xlink:href="#icon-check-circle"></use>');

    act(() => {
      jest.runAllTimers();
    });
  });

  it('should show a toast (fail)', () => {
    toast.fail('test');

    const element = document.querySelector('.Toast');

    expect(element).toHaveAttribute('data-type', 'error');
    expect(element).toContainHTML('<use xlink:href="#icon-close-circle"></use>');

    act(() => {
      jest.runAllTimers();
    });
  });

  it('should show a toast (loading)', () => {
    toast.loading('test');

    const element = document.querySelector('.Toast');
    expect(element).toHaveAttribute('data-type', 'loading');
    expect(element).toContainHTML('<use xlink:href="#icon-spinner"></use>');

    act(() => {
      jest.runAllTimers();
    });
  });

  it('should support custom duration', () => {
    toast.success('test', 5000);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector('.Toast')).not.toBeNull();

    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(document.querySelector('.Toast')).toBeNull();
  });
});
