import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { CheckboxGroup, CheckboxValue } from '..';

afterEach(cleanup);

describe('<CheckboxGroup />', () => {
  it('should render CheckboxGroup', () => {
    const { container } = render(<CheckboxGroup options={[]} value={[]} onChange={() => {}} />);
    const element = container.querySelector('.CheckboxGroup');

    expect(element).toBeInTheDocument();
  });

  it('should have a name in input', () => {
    const { container } = render(
      <CheckboxGroup
        name="testName"
        options={[{ value: 'test1' }, { value: 'test2' }]}
        value={[]}
        onChange={() => {}}
      />,
    );

    expect(container.querySelectorAll('input[name="testName"]').length).toBe(2);
  });

  it('should be checked when set value', () => {
    const { getByDisplayValue } = render(
      <CheckboxGroup
        name="testName"
        options={[{ value: 'test1' }, { value: 'test2' }]}
        value={['test1']}
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeChecked();
    expect(getByDisplayValue('test2')).not.toBeChecked();
  });

  it('should be disabled', () => {
    const { getByDisplayValue } = render(
      <CheckboxGroup
        disabled
        options={[{ value: 'test1' }, { value: 'test2' }]}
        value={[]}
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeDisabled();
    expect(getByDisplayValue('test2')).toBeDisabled();
  });

  it('should disable item', () => {
    const { getByDisplayValue } = render(
      <CheckboxGroup
        options={[{ value: 'test1', disabled: true }, { value: 'test2' }]}
        value={[]}
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeDisabled();
    expect(getByDisplayValue('test2')).not.toBeDisabled();
  });

  it('should call onChange callback', () => {
    function Test() {
      const [value, setValue] = React.useState<CheckboxValue[]>(['test2']);

      return (
        <CheckboxGroup
          name="testName"
          options={[{ value: 'test1' }, { value: 'test2' }]}
          value={value}
          onChange={(val) => setValue(val)}
        />
      );
    }

    const { getByDisplayValue } = render(<Test />);

    fireEvent.click(getByDisplayValue('test1'));
    expect(getByDisplayValue('test1')).toBeChecked();

    fireEvent.click(getByDisplayValue('test2'));
    expect(getByDisplayValue('test2')).not.toBeChecked();
  });

  it('should have a custom className', () => {
    const { container } = render(
      <CheckboxGroup className="testName" options={[]} value={[]} onChange={() => {}} />,
    );
    const element = container.querySelector('.CheckboxGroup');

    expect(element).toHaveClass('testName');
  });
});
