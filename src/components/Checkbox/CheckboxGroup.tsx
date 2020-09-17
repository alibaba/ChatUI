import React from 'react';
import clsx from 'clsx';
import { Checkbox, CheckboxProps, CheckboxValue } from './Checkbox';

export type CheckboxGroupProps = {
  className?: string;
  options: CheckboxProps[];
  value: CheckboxValue[];
  name?: string;
  disabled?: boolean;
  block?: boolean;
  onChange: (value: CheckboxValue[], event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = (props) => {
  const { className, options, value, name, disabled, block, onChange } = props;

  function handleChange(val: CheckboxValue, e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.checked ? value.concat(val) : value.filter((item) => item !== val);
    onChange(newValue, e);
  }

  return (
    <div className={clsx('CheckboxGroup', { 'CheckboxGroup--block': block }, className)}>
      {options.map((item) => (
        <Checkbox
          label={item.label || item.value}
          value={item.value}
          name={name}
          checked={value.includes(item.value)}
          disabled={'disabled' in item ? item.disabled : disabled}
          onChange={(e) => {
            handleChange(item.value, e);
          }}
          key={item.value}
        />
      ))}
    </div>
  );
};
