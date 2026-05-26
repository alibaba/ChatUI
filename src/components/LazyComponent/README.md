# LazyComponent 懒加载组件

LazyComponent 懒加载组件用于动态加载组件，支持通过组件名称或代码加载组件。

## 代码演示

```jsx
import React from 'react';
import { LazyComponent } from '@chatui/core';

// 方式一：通过组件属性加载
<LazyComponent
  component={MyComponent}
  fallback={<div>加载中...</div>}
  onLoad={({ async, component }) => console.log('组件已加载', async, component)}
/>

// 方式二：通过组件代码加载
<LazyComponent
  code="MyComponent"
  fallback={<div>加载中...</div>}
  onLoad={params => console.log(params)}
  onError={err => console.error(err)}
/>
```

## Props

### LazyComponentProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| component | React.ComponentType | - | 直接传入组件 |
| code | string | - | 组件代码（需配合 ComponentsProvider 使用） |
| fallback | ReactNode | - | 加载中的占位内容 |
| onLoad | (params: LazyComponentOnLoadParams) => void | - | 组件加载成功回调 |
| onError | (error: Error) => void | - | 组件加载失败回调 |

### LazyComponentOnLoadParams

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| async | boolean | 是否异步加载 |
| component | React.ComponentType | 加载的组件 |

## LazyComponentWithCode

通过组件代码加载的变体。

### LazyComponentPropsWithCode

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| code | string | - | 组件代码 |
| fallback | ReactNode | - | 加载中的占位内容 |
| onLoad | (params: LazyComponentOnLoadParams) => void | - | 组件加载成功回调 |
| onError | (error: Error) => void | - | 组件加载失败回调 |
