# Coupon 优惠券组件

Coupon 优惠券组件，用于展示优惠券信息，支持满减券和折扣券两种类型。

## 代码演示

```jsx
import React from 'react';
import { Coupon } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>满减券</h3>
      <Coupon
        name="新人专享券"
        value={20}
        condition="满100可用"
        dateDesc="2025.01.01-2025.12.31"
      />

      <h3>折扣券</h3>
      <Coupon
        name="限时折扣券"
        discount={8}
        condition="无门槛"
        dateDesc="2025.01.01-2025.12.31"
      />

      <h3>已过期状态</h3>
      <Coupon
        name="已过期券"
        value={50}
        condition="满200可用"
        status="expired"
      />

      <h3>在列表中使用</h3>
      <Coupon
        name="列表优惠券"
        value={30}
        condition="满150可用"
        inList
        onClick={() => console.log('查看详情')}
      />
    </div>
  );
}
```

## Props

### CouponProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| name | string | - | 优惠券名称 |
| value | number | - | 优惠券金额（满减券） |
| discount | number | - | 折扣比例（折扣券，如 8 表示 8 折） |
| condition | string | - | 使用条件描述 |
| endAt | number | - | 失效日期时间戳 |
| dateDesc | ReactNode | - | 有效期描述文本 |
| desc | ReactNode | - | 其他描述信息 |
| status | 'normal' \| 'nearExpired' \| 'expired' \| 'used' | 'normal' | 优惠券状态 |
| inList | boolean | false | 是否在列表中使用 |
| btnText | string | '查看' | 按钮文本 |
| onClick | (e: React.MouseEvent) => void | - | 点击事件回调 |
