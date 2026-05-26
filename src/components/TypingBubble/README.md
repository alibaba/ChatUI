# TypingBubble 打字气泡组件

TypingBubble 打字气泡组件用于模拟打字效果，逐字显示内容。

## 代码演示

```jsx
import React from 'react';
import { TypingBubble } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础打字效果</h3>
      <TypingBubble
        content="这是一段逐字显示的文字内容"
      />

      <h3>富文本打字效果</h3>
      <TypingBubble
        content="<p>支持 <strong>富文本</strong> 内容</p>"
        isRichText
        options={{ speed: 50 }}
      />

      <h3>自定义渲染</h3>
      <TypingBubble
        content="Hello World"
        messageRender={(content) => content.toUpperCase()}
        onResize={(el) => console.log('内容区域尺寸变化', el)}
      />
    </div>
  );
}
```

## Props

继承自 HTML div 元素的属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 要显示的内容 |
| className | string | - | 自定义类名 |
| isRichText | boolean | - | 是否为富文本 |
| options | Options | - | 打字效果配置（参见 useTypewriter） |
| messageRender | (content: string) => string | - | 内容渲染前转换函数 |
| onResize | (el: HTMLDivElement) => void | - | 内容区域尺寸变化回调 |
| children | ReactNode | - | 子元素 |
