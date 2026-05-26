# Goods 商品卡片组件

Goods 商品卡片组件用于展示商品或订单信息，支持商品购买卡片和订单列表卡片两种模式。

## 代码演示

```jsx
import React from 'react';
import { Goods } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>商品卡片</h3>
      <Goods
        type="goods"
        img="//example.com/product.jpg"
        name="iPhone 15 Pro"
        desc="全新未拆封，正品保障"
        price={8999}
        originalPrice={9999}
        tags={[{ name: '热卖' }, { name: '正品' }]}
        action={{ icon: 'cart', onClick: () => console.log('加入购物车') }}
      />

      <h3>订单卡片</h3>
      <Goods
        type="order"
        img="//example.com/product.jpg"
        name="iPhone 15 Pro"
        price={8999}
        count={2}
        unit="部"
        status="待发货"
        onClick={() => console.log('查看详情')}
      />

      <h3>紧凑模式</h3>
      <Goods
        type="order"
        variant="compact"
        img="//example.com/product.jpg"
        name="iPhone 15 Pro"
        price={8999}
      />
    </div>
  );
}
```

## Props

### GoodsProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| type | 'goods' \| 'order' | - | 卡片类型：商品或订单 |
| img | string | - | 图片地址 |
| caption | string | - | 图片上的说明文字 |
| name | string | - | 名称 |
| desc | ReactNode | - | 描述信息 |
| tags | Array<{ name: string }> | - | 标签列表 |
| locale | string | - | 货币本地化配置 |
| currency | string | - | 货币符号 |
| price | number | - | 价格 |
| originalPrice | number | - | 原价 |
| meta | ReactNode | - | 其他元信息 |
| count | number | - | 数量 |
| unit | string | - | 单位 |
| status | string | - | 状态文本 |
| variant | 'normal' \| 'inList' \| 'compact' | - | 变体样式 |
| action | ButtonProps \| IconButtonProps | - | 操作按钮配置 |
| elderMode | boolean | - | 适老化模式（会自动根据 ConfigProvider 设置） |
| asideContent | ReactNode | - | 订单模式下的侧边内容 |
| onClick | (e: React.MouseEvent) => void | - | 点击事件 |
| children | ReactNode | - | 子元素 |
