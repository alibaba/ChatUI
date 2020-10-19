import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { FormActions } from '..';

afterEach(cleanup);

describe('<FormActions />', () => {
  it('should render a form actions', () => {
    const { getByTestId } = render(<FormActions data-testid="formActions" />);
    const formActions = getByTestId('formActions');

    expect(formActions).toHaveClass('FormActions');
  });

  it('should render children', () => {
    const { getByTestId } = render(
      <FormActions data-testid="formActions">
        <span>testChild</span>
      </FormActions>,
    );
    const formActions = getByTestId('formActions');

    expect(formActions).toContainHTML('<span>testChild</span>');
  });
});
