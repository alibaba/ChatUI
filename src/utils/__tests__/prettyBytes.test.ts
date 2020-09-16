import { cleanup } from '@testing-library/react';
import prettyBytes from '../prettyBytes';

afterEach(cleanup);

describe('utils/prettyBytes', () => {
  it('should convert bytes to human readable strings', () => {
    expect(prettyBytes(0)).toBe('0 B');
    expect(prettyBytes(0.7)).toBe('0.7 B');
    expect(prettyBytes(10)).toBe('10 B');
    expect(prettyBytes(10.1)).toBe('10.1 B');
    expect(prettyBytes(1000)).toBe('1000 B');
    expect(prettyBytes(1024)).toBe('1 KB');
    expect(prettyBytes(1024 ** 5)).toBe('1 PB');
    expect(prettyBytes(1024 ** 8 * 100)).toBe('100 YB');
  });
});
