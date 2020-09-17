import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FileCard } from '..';

afterEach(cleanup);

const file = new File(['foo'], 'foo.txt', { type: 'text/plain' });

describe('<Empty />', () => {
  it('should render the file', () => {
    const { container } = render(<FileCard file={file} />);

    expect(container.querySelector('.FileCard-ext')).toHaveTextContent('txt');
    expect(container.querySelector('.FileCard-icon')).toHaveAttribute('data-type', 'txt');
    expect(container.querySelector('.FileCard-name')).toHaveTextContent('foo.txt');
    expect(container.querySelector('.FileCard-size')).toHaveTextContent('3 B');
  });

  it('should apply the extension', () => {
    const { container } = render(<FileCard file={file} extension="jpg" />);

    expect(container.querySelector('.FileCard-ext')).toHaveTextContent('jpg');
    expect(container.querySelector('.FileCard-icon')).toHaveAttribute('data-type', 'jpg');
  });
});
