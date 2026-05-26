# Icon 图标组件

Icon 组件用于展示 SVG 图标，支持图标旋转动画，适用于各种需要图标的场景。

## 使用场景

- 按钮图标
- 导航菜单
- 状态指示
- 功能入口
- 装饰元素

## 代码演示

```jsx
import React from 'react';
import { Icon } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Icon type="plus" />
      <Icon type="search" />
      <Icon type="close" />

      <h3>旋转动画</h3>
      <Icon type="spinner" spin />
      <Icon type="loading" spin />

      <h3>带语义化名称</h3>
      <Icon type="plus" name="添加" />
      <Icon type="close" name="关闭" />

      <h3>自定义样式</h3>
      <Icon type="heart" className="custom-icon" style={{ color: 'red', fontSize: 24 }} />
    </div>
  );
}
```

## Props

### IconProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | string | - | 图标类型（必填） |
| className | string | - | 自定义类名 |
| name | string | - | 图标的语义化名称，用于无障碍访问 |
| spin | boolean | `false` | 是否旋转 |

## 注意事项

- `type` 属性对应 SVG sprite 中的图标 ID，格式为 `icon-{type}`
- 当设置 `name` 时，会添加 `aria-label` 属性用于屏幕阅读器
- 当未设置 `name` 时，会添加 `aria-hidden="true"` 表示装饰性图标
- 使用前需要确保对应的 SVG 图标已加载到页面中
