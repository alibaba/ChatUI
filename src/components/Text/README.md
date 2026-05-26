# Text 文本组件

Text 组件用于展示文本内容，支持文本对齐、换行控制和文本截断等功能。

## 使用场景

- 段落文本展示
- 标题和描述
- 长文本截断
- 文本对齐控制
- 内容排版

## 代码演示

```jsx
import React from 'react';
import { Text } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Text>这是一段普通文本</Text>

      <h3>不同对齐方式</h3>
      <Text align="left">左对齐文本</Text>
      <Text align="center">居中对齐文本</Text>
      <Text align="right">右对齐文本</Text>
      <Text align="justify">两端对齐文本</Text>

      <h3>强制换行</h3>
      <Text breakWord>
        这是一段很长的英文文本：averylongwordwithoutspacesverylongwordwithoutspaces
      </Text>

      <h3>单行截断</h3>
      <Text truncate>
        这是一段很长的文本，超出容器宽度时会被截断并显示省略号
      </Text>

      <h3>多行截断</h3>
      <Text truncate={3}>
        这是一段很长的文本内容。当文本超过指定行数时，
        会自动截断并在末尾显示省略号。这个示例设置为最多显示3行。
        超出的内容将被隐藏。
      </Text>

      <h3>自定义元素类型</h3>
      <Text as="p">段落文本</Text>
      <Text as="span">行内文本</Text>
      <Text as="h2">标题文本</Text>
    </div>
  );
}
```

## Props

### TextProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| as | React.ElementType | `'div'` | 渲染的 HTML 元素类型 |
| align | `'left' \| 'center' \| 'right' \| 'justify'` | - | 文本对齐方式 |
| breakWord | boolean | `false` | 是否强制换行（用于长单词） |
| truncate | boolean \| number | `false` | 文本截断，`true` 为单行截断，数字为多行截断的行数 |
| children | ReactNode | - | 文本内容 |

## 注意事项

- 当 `truncate` 为数字时，使用 `-webkit-line-clamp` 实现多行截断
- `breakWord` 适用于处理没有空格的长单词或 URL
- 多行截断功能依赖 CSS，旧版浏览器可能不支持
