# InfiniteScroll 无限滚动组件

InfiniteScroll 无限滚动组件，当滚动到底部时触发加载更多数据的回调。

## 代码演示

```jsx
import React from 'react';
import { InfiniteScroll } from '@chatui/core';

export default function() {
  return (
    <InfiniteScroll
      distance={100}
      onLoadMore={() => console.log('加载更多')}
      onScroll={(e) => console.log('滚动', e)}
    >
      <div>内容区域...</div>
    </InfiniteScroll>
  );
}
```

## Props

### InfiniteScrollProps

继承自 HTML div 元素的属性：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| disabled | boolean | - | 是否禁用加载更多 |
| distance | number | 0 | 距离底部多少像素触发加载 |
| onLoadMore | () => void | - | 加载更多回调 |
| onScroll | (event: React.UIEvent) => void | - | 滚动事件回调 |
| children | ReactNode | - | 内容 |
