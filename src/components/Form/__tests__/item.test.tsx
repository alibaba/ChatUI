import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormItem } from '..';

afterEach(cleanup);

describe('<FormItem />', () => {
  it('should render a label', () => {
    const { container } = render(<FormItem label="testLabel" />);
    const formItem = container.querySelector('.FormItem');

    expect(formItem?.querySelector('.Label')).not.toBeNull();
    expect(formItem).toHaveTextContent('testLabel');
  });

  it('should render a help text', () => {
    const { container } = render(<FormItem help="testHelp" />);
    const formItem = container.querySelector('.FormItem');

    expect(formItem?.querySelector('.HelpText')).not.toBeNull();
    expect(formItem).toHaveTextContent('testHelp');
  });

  it('should have a status (required)', () => {
    const { container } = render(<FormItem required />);
    const formItem = container.querySelector('.FormItem');

    expect(formItem).toHaveClass('required');
  });

  it('should have a status (invalid)', () => {
    const { container } = render(<FormItem invalid />);
    const formItem = container.querySelector('.FormItem');

    expect(formItem).toHaveClass('is-invalid');
  });

  it('should be hidden if specified', () => {
    const { container } = render(<FormItem hidden />);
    const formItem = container.querySelector('.FormItem');

    expect(formItem).toHaveAttribute('hidden');
  });
});
