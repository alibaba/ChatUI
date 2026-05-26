# Input 输入框组件

Input 组件用于接收用户输入，支持单行和多行输入，具有自适应高度和字数统计等功能。

## 使用场景

- 表单输入
- 搜索框
- 文本编辑
- 评论输入
- 聊天消息输入

## 代码演示

```jsx
import React, { useState } from 'react';
import { Input } from '@chatui/core';

export default function() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h3>基础用法</h3>
      <Input
        placeholder="请输入内容"
        value={value}
        onChange={(val) => setValue(val)}
      />

      <h3>不同样式</h3>
      <Input variant="outline" placeholder="轮廓样式" />
      <Input variant="filled" placeholder="填充样式" />
      <Input variant="flushed" placeholder="底线样式" />

      <h3>多行输入</h3>
      <Input
        multiline
        rows={3}
        placeholder="多行文本输入"
        value={value}
        onChange={(val) => setValue(val)}
      />

      <h3>自适应高度</h3>
      <Input
        autoSize
        minRows={2}
        maxRows={5}
        placeholder="输入内容会自动调整高度"
        value={value}
        onChange={(val) => setValue(val)}
      />

      <h3>字数限制和统计</h3>
      <Input
        maxLength={100}
        showCount
        placeholder="最多输入100个字符"
        value={value}
        onChange={(val) => setValue(val)}
      />

      <h3>禁用状态</h3>
      <Input disabled placeholder="禁用状态" />
    </div>
  );
}
```

## Props

### InputProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| type | string | `'text'` | 输入框类型 |
| variant | `'outline' \| 'filled' \| 'flushed'` | `'outline'` | 输入框样式变体 |
| value | string | - | 输入框的值 |
| placeholder | string | - | 占位文本 |
| rows | number | `1` | 文本域的行数 |
| minRows | number | `rows` | 最小行数 |
| maxRows | number | `5` | 最大行数 |
| maxLength | number | - | 最大字符长度 |
| showCount | boolean | `!!maxLength` | 是否显示字数统计 |
| multiline | boolean | `false` | 是否为多行文本域 |
| autoSize | boolean | `false` | 是否自适应高度 |
| onChange | (value: string, event: ChangeEvent) => void | - | 值变化时的回调 |

## 注意事项

- 当 `autoSize` 为 `true` 时，输入框高度会根据内容自动调整
- `variant` 的默认值会根据 Form 组件的 `theme` 自动选择
- `showCount` 默认在设置了 `maxLength` 时自动开启
- 当 `rows > 1` 或设置 `multiline`、`autoSize` 时，会渲染为 `textarea` 元素
