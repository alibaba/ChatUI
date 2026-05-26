# Tag 标签组件

Tag 组件用于标记和分类，支持多种颜色主题。

## 使用场景

- 内容标记
- 分类标识
- 状态展示
- 关键词标注
- 属性说明

## 代码演示

```jsx
import React from 'react';
import { Tag } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Tag>默认标签</Tag>

      <h3>不同颜色</h3>
      <Tag color="primary">主要标签</Tag>
      <Tag color="success">成功标签</Tag>
      <Tag color="danger">危险标签</Tag>
      <Tag color="warning">警告标签</Tag>

      <h3>自定义元素类型</h3>
      <Tag as="a" href="#" color="primary">链接标签</Tag>
      <Tag as="button" onClick={() => alert('clicked')}>按钮标签</Tag>
    </div>
  );
}
```

## Props

### TagProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| as | React.ElementType | `'span'` | 渲染的 HTML 元素类型 |
| color | `'primary' \| 'success' \| 'danger' \| 'warning'` | - | 标签颜色主题 |
| children | ReactNode | - | 标签内容 |

## 注意事项

- 通过 `as` 属性可以将标签渲染为不同的 HTML 元素
- 不同的 `color` 会应用对应的主题样式
- 支持传递原生 HTML 属性，如 `href`、`onClick` 等
