# Search 搜索框组件

Search 搜索框组件用于实现搜索功能，支持输入、回车搜索、清空等功能。

## 代码演示

```jsx
import React from 'react';
import { Search } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础搜索</h3>
      <Search
        placeholder="请输入关键词"
        onSearch={(query) => console.log('搜索:', query)}
        onChange={(value) => console.log('输入值:', value)}
      />

      <h3>禁用状态</h3>
      <Search
        disabled
        placeholder="禁用状态"
      />

      <h3>不显示搜索按钮</h3>
      <Search
        showSearch={false}
        placeholder="仅回车搜索"
        onSearch={(query) => console.log('搜索:', query)}
      />
    </div>
  );
}
```

## Props

继承自 Input 的属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| value | string | - | 输入值（受控） |
| placeholder | string | - | 占位文本 |
| disabled | boolean | - | 是否禁用 |
| clearable | boolean | true | 是否显示清空按钮 |
| showSearch | boolean | true | 是否显示搜索按钮 |
| onSearch | (query: string, event) => void | - | 搜索回调（回车或点击搜索按钮时触发） |
| onChange | (value: string) => void | - | 输入变化回调 |
| onClear | () => void | - | 清空回调 |
