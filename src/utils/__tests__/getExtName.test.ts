import { cleanup } from '@testing-library/react';
import getExtName from '../getExtName';

afterEach(cleanup);

describe('utils/getExtName', () => {
  it('should get the extension', () => {
    expect(getExtName('foo.jpg')).toBe('jpg');
  });

  it('should get the extension', () => {
    expect(getExtName('foo.jpg.png')).toBe('png');
  });

  it('should get empty string when no extension', () => {
    expect(getExtName('foo.')).toBe('');
  });

  it('should get empty string when no extension', () => {
    expect(getExtName('foo')).toBe('');
  });
});
