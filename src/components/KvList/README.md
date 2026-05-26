# KvList 键值列表组件

KvList 键值列表组件用于展示键值对列表，常用于商品详情、订单信息等场景。

## 代码演示

```jsx
import React from 'react';
import { KvList, KvItem } from '@chatui/core';

export default function() {
  return (
    <KvList align="left">
      <KvItem title="商品名称" level={1}>iPhone 15 Pro</KvItem>
      <KvItem title="订单编号" level={2}>ORD202501010001</KvItem>
      <KvItem title="订单状态" level={2} highlight>
        <span style={{ color: '#07c160' }}>已完成</span>
      </KvItem>
      <KvItem
        title="备注"
        level={1}
        desc="如有质量问题请联系我司客服"
        rightIcon="chevron-right"
        onClick={() => console.log('查看备注')}
      >
        点击查看详情
      </KvItem>
    </KvList>
  );
}
```

## KvList

列表容器组件。

### KvListProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| align | 'left' \| 'right' | 'left' | 内容对齐方式 |
| children | ReactNode | - | KvItem 子组件 |

## KvItem

列表项组件。

### KvItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| title | string | - | 标题文本 |
| level | number | - | 层级（用于样式区分） |
| desc | string | - | 描述文本 |
| highlight | boolean | - | 是否高亮显示 |
| ellipsis | boolean | false | 内容是否省略 |
| rightIcon | string | - | 右侧图标类型 |
| onClick | (event: React.MouseEvent) => void | - | 点击事件 |
| children | ReactNode | - | 内容 |
