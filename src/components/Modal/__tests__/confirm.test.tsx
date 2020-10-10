import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Confirm } from '..';

afterEach(cleanup);

describe('<Confirm />', () => {
  it('should render a confirm', () => {
    const { baseElement } = render(<Confirm active />);

    expect(baseElement.querySelector('.Confirm')).not.toBeNull();
    expect(baseElement.querySelector('.Confirm')).toHaveClass('Modal');
  });

  it('should not have close button', () => {
    const { baseElement } = render(<Confirm active onClose={() => {}} />);

    expect(baseElement.querySelector('.Modal-close')).toBeNull();
  });
});
