# BackBottom 底部返回组件

BackBottom 组件用于在内容滚动后显示"返回底部"按钮，点击可快速回到页面底部。常用于消息列表等场景，当用户向上滚动查看历史消息时，提供快速返回最新内容的入口。

## 代码演示

```jsx
import React from 'react';
import { BackBottom } from '@chatui/core';

export default function() {
  return (
    <BackBottom
      count={5}
      onClick={() => console.log('返回底部')}
      onDidMount={() => console.log('组件已挂载')}
    />
  );
}
```

## Props

### BackBottomProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| count | number | - | 未读消息数量，为 0 时显示"返回底部"，为 1 时显示"1条新消息"，大于 1 时显示"{n}条新消息" |
| onClick | () => void | - | 点击按钮时的回调函数 |
| onDidMount | () => void | - | 组件挂载后的回调函数 |
