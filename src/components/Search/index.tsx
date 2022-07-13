import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { Input, InputProps } from '../Input';
import { useLocale } from '../LocaleProvider';

export interface SearchProps extends Omit<InputProps, 'value'> {
  className?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  showSearch?: boolean;
  onSearch?: (
    query: string,
    event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void;
  onChange?: (value: string) => void;
  onClear?: () => void;
}

export const Search = ({
  className,
  onSearch,
  onChange,
  onClear,
  value,
  clearable = true,
  showSearch = true,
  ...other
}: SearchProps) => {
  const [query, setQuery] = useState(value || '');
  const { trans } = useLocale('Search');

  const handleChange = (val: string) => {
    setQuery(val);

    if (onChange) {
      onChange(val);
    }
  };

  const handleClear = () => {
    setQuery('');

    if (onClear) {
      onClear();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      if (onSearch) {
        onSearch(query, e);
      }
      e.preventDefault();
    }
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (onSearch) {
      onSearch(query, e);
    }
  };

  return (
    <div className={clsx('Search', className)}>
      <Icon className="Search-icon" type="search" />
      <Input
        className="Search-input"
        type="search"
        value={query}
        enterKeyHint="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...other}
      />
      {clearable && query && (
        <IconButton className="Search-clear" icon="x-circle-fill" onClick={handleClear} />
      )}
      {showSearch && (
        <Button className="Search-btn" color="primary" onClick={handleSearchClick}>
          {trans('search')}
        </Button>
      )}
    </div>
  );
};
