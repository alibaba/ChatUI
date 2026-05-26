# IconButton 图标按钮组件

IconButton 组件是专门用于显示图标的按钮，基于 Button 组件封装，适用于工具栏、导航等场景。

## 使用场景

- 工具栏操作
- 导航按钮
- 关闭按钮
- 快捷操作
- 浮动按钮

## 代码演示

```jsx
import React from 'react';
import { IconButton } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <IconButton icon="close" />
      <IconButton icon="search" />
      <IconButton icon="more-v" />

      <h3>不同尺寸</h3>
      <IconButton icon="close" size="sm" />
      <IconButton icon="close" size="md" />
      <IconButton icon="close" size="lg" />

      <h3>使用图片</h3>
      <IconButton img="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />

      <h3>点击事件</h3>
      <IconButton icon="close" onClick={() => console.log('clicked')} />

      <h3>禁用状态</h3>
      <IconButton icon="close" disabled />

      <h3>加载状态</h3>
      <IconButton icon="close" loading />
    </div>
  );
}
```

## Props

### IconButtonProps

IconButton 继承了 Button 组件的所有属性，同时新增以下属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| icon | string | - | 图标类型 |
| img | string | - | 图片地址（当没有 icon 时使用） |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| disabled | boolean | `false` | 是否禁用 |
| loading | boolean | `false` | 是否显示加载状态 |
| onClick | (event: MouseEvent) => void | - | 点击事件处理函数 |

## 注意事项

- IconButton 是 Button 组件的特殊形式，专为图标设计
- `icon` 优先级高于 `img`
- 继承了 Button 组件的所有功能和状态
- 适合用于只显示图标而不显示文字的场景
