# OrderObject 订单对象组件

OrderObject 订单对象组件用于展示订单信息，支持单个商品和多个商品的展示。

## 代码演示

```jsx
import React from 'react';
import { OrderObject } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>单个商品订单</h3>
      <OrderObject
        list={[{
          name: 'iPhone 15 Pro',
          img: '//example.com/iphone.jpg',
          price: 8999,
        }]}
        onClick={() => console.log('查看订单')}
      />

      <h3>多个商品订单</h3>
      <OrderObject
        title="订单详情"
        list={[
          { name: 'iPhone 15 Pro', img: '//example.com/1.jpg', price: 8999 },
          { name: 'AirPods Pro', img: '//example.com/2.jpg', price: 1999 },
          { name: 'Watch Series 9', img: '//example.com/3.jpg', price: 3999 },
        ]}
        count={3}
        onClick={() => console.log('查看订单')}
      />
    </div>
  );
}
```

## Props

### OrderObjectProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| title | string | - | 订单标题 |
| list | GoodsProps[] | - | 商品列表 |
| count | number | - | 商品总数，不传则取 list.length |
| onClick | React.MouseEventHandler | - | 点击事件回调 |
