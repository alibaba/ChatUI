# ScrollGrid 横向滚动网格组件

ScrollGrid 横向滚动网格组件，用于展示需要横向滚动的网格内容，并显示滚动指示器。

## 代码演示

```jsx
import React from 'react';
import { ScrollGrid } from '@chatui/core';

export default function() {
  return (
    <ScrollGrid
      wrap={false}
      onIndicatorToggle={(show) => console.log('指示器显示状态:', show)}
    >
      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ width: 100, height: 100, background: '#f5f5f5' }}>1</div>
        <div style={{ width: 100, height: 100, background: '#e5e5e5' }}>2</div>
        <div style={{ width: 100, height: 100, background: '#d5d5d5' }}>3</div>
        <div style={{ width: 100, height: 100, background: '#c5c5c5' }}>4</div>
      </div>
    </ScrollGrid>
  );
}
```

## Props

### ScrollGridProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| wrap | boolean | false | 是否换行（为 true 时不显示滚动指示器） |
| onIndicatorToggle | (show: boolean) => void | - | 滚动指示器显示状态变化回调 |
| children | ReactNode | - | 网格内容 |
