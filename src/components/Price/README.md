# Price 价格组件

Price 组件用于展示价格信息，支持货币符号、小数点格式化等功能。

## 使用场景

- 商品价格展示
- 订单金额
- 费用说明
- 财务报表
- 支付信息

## 代码演示

```jsx
import React from 'react';
import { Price } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Price price={99.99} />

      <h3>自定义货币符号</h3>
      <Price price={199} currency="$" />

      <h3>原价对比</h3>
      <div>
        <Price price={99} />
        <Price price={199} original />
      </div>
    </div>
  );
}
```

## Props

### PriceProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| price | number | - | 价格（必填） |
| currency | string | `'¥'` | 货币符号 |
| original | boolean | `false` | 是否为原价（显示删除线） |

## 注意事项

- 价格会自动格式化为两位小数
- `original` 为 true 时会显示删除线样式
- 支持自定义货币符号
