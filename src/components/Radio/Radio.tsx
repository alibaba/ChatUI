import React from 'react';
import clsx from 'clsx';

export type RadioValue = string | number | undefined;

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  value?: RadioValue;
  label?: RadioValue;
};

export const Radio = (props: RadioProps) => {
  const { className, label, checked, disabled, onChange, ...other } = props;

  return (
    <label
      className={clsx('Radio', className, {
        'Radio--checked': checked,
        'Radio--disabled': disabled,
      })}
    >
      <input
        type="radio"
        className="Radio-input"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...other}
      />
      {/* <span className="Radio-icon" /> */}
      <span className="Radio-text">{label}</span>
    </label>
  );
};
