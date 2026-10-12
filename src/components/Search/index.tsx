import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { Input, InputProps } from '../Input';
import { useLocale } from '../ConfigProvider';

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
  disabled,
  clearable = true,
  showSearch = true,
  ...other
}: SearchProps) => {
  const [query, setQuery] = useState(value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const { trans } = useLocale('Search');

  const handleChange = (val: string) => {
    setQuery(val);

    if (onChange) {
      onChange(val);
    }
  };

  const handleClear = () => {
    setQuery('');
    // 清除后把焦点还给输入框，方便继续输入
    if (inputRef.current) {
      inputRef.current.focus();
    }

    if (onClear) {
      onClear();
    }
  };

  const doSearch = (
    e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (onSearch) {
      onSearch(query, e);
    }
    // 搜索后让输入框失焦，收起软键盘
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      doSearch(e);
      e.preventDefault();
    }
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    doSearch(e);
  };

  return (
    <div className={clsx('Search', className)} data-disabled={disabled}>
      <Icon className="Search-icon" type="search" />
      <Input
        className="Search-input"
        type="search"
        ref={inputRef}
        value={query}
        disabled={disabled}
        enterKeyHint="search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...other}
      />
      <div className="Search-actions">
        {clearable && query && (
          <IconButton className="Search-clear" icon="x-circle-fill" onClick={handleClear} />
        )}
        {showSearch && (
          <Button className="Search-btn" size="sm" color="primary" onClick={handleSearchClick}>
            {trans('search')}
          </Button>
        )}
      </div>
    </div>
  );
};
