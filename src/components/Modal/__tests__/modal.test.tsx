import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Modal } from '..';

afterEach(cleanup);

describe('<Modal />', () => {
  it('should render a modal', () => {
    const { baseElement } = render(<Modal active />);

    expect(baseElement.querySelector('.Modal')).not.toBeNull();
  });
});
