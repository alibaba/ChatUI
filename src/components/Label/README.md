# Label 标签组件

Label 标签组件用于表单元素前的标签展示。

## 代码演示

```jsx
import React from 'react';
import { Label } from '@chatui/core';

export default function() {
  return (
    <div>
      <Label>用户名</Label>
      <input type="text" />

      <Label htmlFor="password">密码</Label>
      <input id="password" type="password" />
    </div>
  );
}
```

## Props

继承自 HTML label 元素的属性。
