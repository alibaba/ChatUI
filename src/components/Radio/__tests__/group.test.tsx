import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { RadioGroup, RadioValue } from '..';

afterEach(cleanup);

describe('<RadioGroup />', () => {
  it('should render RadioGroup', () => {
    const { container } = render(<RadioGroup options={[]} value="" onChange={() => {}} />);
    const element = container.querySelector('.RadioGroup');

    expect(element).toBeInTheDocument();
  });

  it('should be checked when set value', () => {
    const { getByDisplayValue } = render(
      <RadioGroup
        name="testName"
        options={[{ value: 'test1' }, { value: 'test2' }]}
        value="test1"
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeChecked();
    expect(getByDisplayValue('test2')).not.toBeChecked();
  });

  it('should be disabled', () => {
    const { getByDisplayValue } = render(
      <RadioGroup
        disabled
        options={[{ value: 'test1' }, { value: 'test2' }]}
        value=""
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeDisabled();
    expect(getByDisplayValue('test2')).toBeDisabled();
  });

  it('should disable item', () => {
    const { getByDisplayValue } = render(
      <RadioGroup
        options={[{ value: 'test1', disabled: true }, { value: 'test2' }]}
        value=""
        onChange={() => {}}
      />,
    );

    expect(getByDisplayValue('test1')).toBeDisabled();
    expect(getByDisplayValue('test2')).not.toBeDisabled();
  });

  it('should call onChange callback', () => {
    function Test() {
      const [value, setValue] = React.useState<RadioValue>('test2');

      return (
        <RadioGroup
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
    expect(getByDisplayValue('test1')).not.toBeChecked();
    expect(getByDisplayValue('test2')).toBeChecked();
  });

  it('should have a custom className', () => {
    const { container } = render(
      <RadioGroup className="testName" options={[]} value="" onChange={() => {}} />,
    );
    const element = container.querySelector('.RadioGroup');

    expect(element).toHaveClass('testName');
  });
});
