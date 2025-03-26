import React from 'react';
import clsx from 'clsx';
import { Radio, RadioProps, RadioValue } from './Radio';

export type RadioGroupProps = {
  className?: string;
  options: RadioProps[];
  value: RadioValue;
  name?: string;
  disabled?: boolean;
  block?: boolean;
  onChange: (value: RadioValue, event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { className, options, value, name, disabled, block, onChange } = props;
  return (
    <div className={clsx('RadioGroup', { 'RadioGroup--block': block }, className)}>
      {options.map((item) => (
        <Radio
          label={item.label || item.value}
          value={item.value}
          name={name}
          checked={value === item.value}
          disabled={'disabled' in item ? item.disabled : disabled}
          onChange={(e) => {
            onChange(item.value, e);
          }}
          key={item.value}
        />
      ))}
    </div>
  );
};
