# Loading 加载组件

Loading 组件用于显示加载状态，提供统一的加载动画和提示文字。

## 使用场景

- 数据加载中
- 页面初始化
- 异步操作等待
- 内容刷新
- 操作处理中

## 代码演示

```jsx
import React from 'react';
import { Loading } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Loading />

      <h3>带提示文字</h3>
      <Loading tip="加载中..." />
      <Loading tip="正在处理，请稍候" />

      <h3>自定义内容</h3>
      <Loading>
        <div>数据加载中，请稍候</div>
      </Loading>
    </div>
  );
}
```

## Props

### LoadingProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| tip | string | - | 提示文字 |
| children | ReactNode | - | 自定义内容 |

## 注意事项

- Loading 组件会居中显示加载图标
- 当同时设置 `tip` 和 `children` 时，两者都会显示
- 组件内部使用了旋转的 spinner 图标作为加载动画
