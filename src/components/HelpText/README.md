# HelpText 帮助文本组件

HelpText 帮助文本组件用于在表单等场景下展示辅助说明文字。

## 代码演示

```jsx
import React from 'react';
import { HelpText } from '@chatui/core';

export default function() {
  return (
    <div>
      <HelpText>这是一段帮助说明文字</HelpText>
      <HelpText>
        支持 <strong>富文本</strong> 内容
      </HelpText>
    </div>
  );
}
```

## Props

继承自 HTML div 元素的属性。
