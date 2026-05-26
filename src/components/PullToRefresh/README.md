# PullToRefresh 下拉刷新组件

PullToRefresh 下拉刷新组件，支持触摸下拉刷新和点击加载更多两种模式。

## 代码演示

```jsx
import React from 'react';
import { PullToRefresh } from '@chatui/core';

export default function() {
  return (
    <PullToRefresh
      onRefresh={() => Promise.resolve()}
      loadMoreText="加载更多"
      onScroll={(e) => console.log('滚动', e)}
    >
      <div>下拉刷新内容区域</div>
    </PullToRefresh>
  );
}
```

## Props

### PullToRefreshProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| distance | number | 20 | 下拉触发距离（像素） |
| loadingDistance | number | 30 | 加载中的偏移距离（像素） |
| maxDistance | number | 60 | 最大下拉距离（像素） |
| distanceRatio | number | 2 | 下拉距离与实际移动距离的比值 |
| loadMoreText | string | '点击加载更多' | 加载更多的文本提示 |
| onRefresh | () => Promise<any> | - | 刷新回调，返回 Promise |
| onScroll | (event: React.UIEvent) => void | - | 滚动事件回调 |
| renderIndicator | (status: PullToRefreshStatus, distance: number) => ReactNode | - | 自定义指示器渲染函数 |
| children | ReactNode | - | 内容 |

### PullToRefreshStatus

| 值 | 说明 |
| --- | --- |
| pending | 初始状态 |
| pull | 下拉中 |
| active | 下拉触发 |
| loading | 加载中 |

### PullToRefreshHandle

| 方法 | 说明 |
| --- | --- |
| scrollTo(opts: { y: number \| '100%', animated?: boolean }) | 滚动到指定位置 |
| scrollToEnd(options?: { animated?: boolean, force?: boolean }) | 滚动到底部 |
| wrapperRef | 容器元素的 ref |
