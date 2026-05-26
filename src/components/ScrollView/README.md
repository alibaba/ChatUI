# ScrollView 滚动视图组件

ScrollView 组件提供自定义滚动区域，支持下拉刷新和上拉加载等功能。

## 使用场景

- 消息列表
- 内容滚动
- 下拉刷新
- 上拉加载
- 虚拟滚动

## 代码演示

```jsx
import React, { useState } from 'react';
import { ScrollView, List, ListItem } from '@chatui/core';

export default function() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setData([...data, data.length + 1]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h3>基础用法</h3>
      <ScrollView style={{ height: 300 }}>
        <List>
          {data.map(item => (
            <ListItem key={item} content={`项目 ${item}`} />
          ))}
        </List>
      </ScrollView>

      <h3>下拉刷新</h3>
      <ScrollView
        style={{ height: 300 }}
        onRefresh={handleRefresh}
        refreshing={loading}
      >
        <List>
          {data.map(item => (
            <ListItem key={item} content={`项目 ${item}`} />
          ))}
        </List>
      </ScrollView>
    </div>
  );
}
```

## Props

### ScrollViewProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| data | any[] | - | 列表数据 |
| renderItem | (item: any) => ReactNode | - | 列表项渲染函数 |
| onRefresh | () => void | - | 下拉刷新回调 |
| refreshing | boolean | `false` | 是否正在刷新 |
| onScroll | (e: Event) => void | - | 滚动事件回调 |
| children | ReactNode | - | 子元素 |

## 注意事项

- ScrollView 需要设置固定高度才能滚动
- 下拉刷新需要同时设置 onRefresh 和 refreshing
- 适合用于需要自定义滚动行为的场景
