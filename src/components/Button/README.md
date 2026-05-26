# Button 按钮组件

Button 组件用于触发操作，支持多种样式、尺寸和状态，适用于各种交互场景。

## 使用场景

- 表单提交
- 对话框操作
- 功能触发
- 导航跳转
- 卡片操作

## 代码演示

```jsx
import React from 'react';
import { Button } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Button>默认按钮</Button>
      <Button color="primary">主要按钮</Button>

      <h3>不同样式</h3>
      <Button variant="text">文本按钮</Button>
      <Button variant="outline">轮廓按钮</Button>

      <h3>不同尺寸</h3>
      <Button size="sm">小按钮</Button>
      <Button size="md">中按钮</Button>
      <Button size="lg">大按钮</Button>

      <h3>块级按钮</h3>
      <Button block>块级按钮</Button>

      <h3>带图标</h3>
      <Button icon="plus">添加</Button>
      <Button icon="search">搜索</Button>

      <h3>加载状态</h3>
      <Button loading>加载中</Button>

      <h3>禁用状态</h3>
      <Button disabled>禁用按钮</Button>

      <h3>点击事件</h3>
      <Button onClick={() => console.log('clicked')}>点击我</Button>
    </div>
  );
}
```

## Props

### ButtonProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| label | string | - | 按钮文本 |
| color | `'primary'` | - | 按钮颜色 |
| variant | `'text' \| 'outline'` | - | 按钮样式变体 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 按钮尺寸 |
| block | boolean | `false` | 是否为块级按钮（宽度 100%） |
| icon | string | - | 图标类型 |
| loading | boolean | `false` | 是否显示加载状态 |
| disabled | boolean | `false` | 是否禁用 |
| onClick | (event: MouseEvent) => void | - | 点击事件处理函数 |
| children | ReactNode | - | 按钮内容 |

## 注意事项

- 当 `loading` 为 `true` 时，按钮会自动显示加载图标并禁止点击
- 当 `block` 为 `true` 时，按钮尺寸会自动设置为 `lg`
- `label` 和 `children` 都可以用来设置按钮文本，`children` 优先级更高
