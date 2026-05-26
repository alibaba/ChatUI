# Divider 分割线组件

Divider 组件用于分隔内容区块，支持带文字的分割线。

## 使用场景

- 内容区块分隔
- 表单分组
- 列表分隔
- 章节划分
- 视觉引导

## 代码演示

```jsx
import React from 'react';
import { Divider } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <p>内容区块 1</p>
      <Divider />
      <p>内容区块 2</p>

      <h3>带文字的分割线（居中）</h3>
      <p>内容区块 1</p>
      <Divider>分割线文字</Divider>
      <p>内容区块 2</p>

      <h3>带文字的分割线（左对齐）</h3>
      <Divider position="left">左侧文字</Divider>

      <h3>带文字的分割线（右对齐）</h3>
      <Divider position="right">右侧文字</Divider>
    </div>
  );
}
```

## Props

### DividerProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| position | `'center' \| 'left' \| 'right'` | `'center'` | 文字位置 |
| children | ReactNode | - | 分割线中的文字内容 |

## 注意事项

- 当没有 `children` 时，显示为纯分割线
- `position` 属性仅在有文字时生效
- 组件具有 `role="separator"` 语义，便于无障碍访问
