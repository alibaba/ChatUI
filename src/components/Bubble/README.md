# Bubble 气泡组件

Bubble 组件用于展示聊天消息气泡，是构建聊天界面的基础组件。

## 使用场景

- 聊天消息展示
- 对话框内容
- 提示信息
- 通知消息
- 问答界面

## 代码演示

```jsx
import React from 'react';
import { Bubble } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Bubble content="这是一条文本消息" />

      <h3>不同类型</h3>
      <Bubble type="text" content="文本消息" />
      <Bubble type="image">
        <img src="https://example.com/image.jpg" alt="图片" />
      </Bubble>

      <h3>自定义内容</h3>
      <Bubble>
        <div>
          <p>自定义内容</p>
          <button>操作按钮</button>
        </div>
      </Bubble>
    </div>
  );
}
```

## Props

### BubbleProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| type | string | `'text'` | 气泡类型 |
| content | string | - | 气泡文本内容 |
| children | ReactNode | - | 自定义内容 |

## 注意事项

- 当同时设置 `content` 和 `children` 时，两者都会被渲染
- `content` 会被包裹在 `<p>` 标签中显示
- 可以通过 `type` 属性来控制气泡的样式，需配合对应的 CSS 类名
