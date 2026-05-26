# Flex 弹性布局组件

Flex 组件是基于 CSS Flexbox 的布局容器，提供便捷的弹性布局能力。

## 使用场景

- 水平或垂直布局
- 元素对齐
- 空间分配
- 响应式布局
- 容器排版

## 代码演示

```jsx
import React from 'react';
import { Flex, FlexItem } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Flex>
        <FlexItem>Item 1</FlexItem>
        <FlexItem>Item 2</FlexItem>
        <FlexItem>Item 3</FlexItem>
      </Flex>

      <h3>居中布局</h3>
      <Flex center style={{ height: 100, border: '1px solid #eee' }}>
        <div>水平垂直居中</div>
      </Flex>

      <h3>行内 Flex</h3>
      <Flex inline>
        <div>行内</div>
        <div>Flex</div>
      </Flex>

      <h3>方向控制</h3>
      <Flex direction="row">水平排列</Flex>
      <Flex direction="column">垂直排列</Flex>
      <Flex direction="row-reverse">水平反向</Flex>
      <Flex direction="column-reverse">垂直反向</Flex>

      <h3>主轴对齐</h3>
      <Flex justify="flex-start">起点对齐</Flex>
      <Flex justify="center">居中对齐</Flex>
      <Flex justify="flex-end">终点对齐</Flex>
      <Flex justify="space-between">两端对齐</Flex>
      <Flex justify="space-around">环绕对齐</Flex>

      <h3>交叉轴对齐</h3>
      <Flex align="flex-start">起点对齐</Flex>
      <Flex align="center">居中对齐</Flex>
      <Flex align="flex-end">终点对齐</Flex>

      <h3>换行</h3>
      <Flex wrap="wrap">允许换行</Flex>
      <Flex wrap="nowrap">不换行</Flex>
      <Flex wrap="wrap-reverse">反向换行</Flex>

      <h3>自定义元素类型</h3>
      <Flex as="section">
        <div>使用 section 标签</div>
      </Flex>
    </div>
  );
}
```

## Props

### FlexProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| as | React.ElementType | `'div'` | 渲染的 HTML 元素类型 |
| center | boolean | `false` | 是否水平垂直居中 |
| inline | boolean | `false` | 是否为行内 flex |
| direction | `'row' \| 'row-reverse' \| 'column' \| 'column-reverse'` | - | 主轴方向 |
| wrap | `'nowrap' \| 'wrap' \| 'wrap-reverse'` | - | 换行方式 |
| justify | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around'` | - | 主轴对齐方式 |
| justifyContent | FlexProps['justify'] | - | 主轴对齐方式（别名） |
| align | `'flex-start' \| 'flex-end' \| 'center'` | - | 交叉轴对齐方式 |
| alignItems | FlexProps['align'] | - | 交叉轴对齐方式（别名） |
| children | ReactNode | - | 子元素 |

### FlexItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| flex | number \| string | - | flex 属性值 |
| children | ReactNode | - | 子元素 |

## 注意事项

- `center` 属性会同时设置主轴和交叉轴居中
- `justify` 和 `justifyContent` 是相同的，可任选其一
- `align` 和 `alignItems` 是相同的，可任选其一
- FlexItem 可以设置 `flex` 属性控制空间分配
