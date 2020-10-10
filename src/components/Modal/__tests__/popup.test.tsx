import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Popup } from '..';

afterEach(cleanup);

describe('<Popup />', () => {
  it('should render a popup', () => {
    const { baseElement } = render(<Popup active />);

    expect(baseElement.querySelector('.Popup')).not.toBeNull();
    expect(baseElement.querySelector('.Popup-body')).toHaveClass('overflow');
  });
});
