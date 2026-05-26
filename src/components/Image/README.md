# Image 图片组件

Image 组件用于展示图片，支持懒加载和流式布局。

## 使用场景

- 图片展示
- 商品图片
- 用户头像
- 图片列表
- 内容配图

## 代码演示

```jsx
import React from 'react';
import { Image } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Image src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" alt="示例图片" />

      <h3>懒加载</h3>
      <Image
        src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        lazy
        alt="懒加载图片"
      />

      <h3>流式布局</h3>
      <Image
        src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        fluid
        alt="全宽图片"
      />

      <h3>自定义样式</h3>
      <Image
        src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        style={{ borderRadius: 8, width: 200, height: 200 }}
        alt="自定义样式"
      />
    </div>
  );
}
```

## Props

### ImageProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| src | string | - | 图片地址（必填） |
| alt | string | - | 图片替代文本 |
| lazy | boolean | `false` | 是否启用懒加载 |
| fluid | boolean | `false` | 是否自适应容器宽度 |

## 注意事项

- 启用 `lazy` 时，图片会在进入视口时才开始加载
- 懒加载基于 Intersection Observer API 实现
- `fluid` 会让图片宽度自适应容器，高度自动调整
- 支持所有原生 img 元素的属性
