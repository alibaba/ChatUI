# RichText 富文本组件

RichText 富文本组件用于安全地渲染富文本内容，内置 DOMPurify 进行 XSS 防护。

## 代码演示

```jsx
import React from 'react';
import { RichText } from '@chatui/core';

export default function() {
  const html = '<p>这是一段<strong>加粗</strong>文本</p><a href="https://example.com">链接</a>';

  return (
    <RichText
      content={html}
      options={{
        ALLOWED_TAGS: ['p', 'strong', 'a', 'br'],
        ALLOWED_ATTR: ['href'],
      }}
    />
  );
}
```

## Props

### RichTextProps

继承自 HTML div 元素的属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 富文本内容（HTML 字符串） |
| className | string | - | 自定义类名 |
| options | DOMPurify.Config | - | DOMPurify 配置选项 |
