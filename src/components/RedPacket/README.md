# RedPacket 红包组件

RedPacket 红包组件用于展示单个红包信息，支持满减红包和自定义图片红包。

## 代码演示

```jsx
import React from 'react';
import { RedPacket } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>普通红包</h3>
      <RedPacket
        name="恭喜发财，大吉大利"
        value={100}
        condition="满50可用"
        btnText="领取"
        onClick={() => console.log('领取红包')}
      />

      <h3>现金红包</h3>
      <RedPacket
        name="恭喜发财"
        variant="cash"
        image="//example.com/cash.png"
        btnText="领取"
        onClick={() => console.log('领取现金红包')}
      />

      <h3>已过期红包</h3>
      <RedPacket
        name="恭喜发财"
        value={50}
        status="expired"
      />

      <h3>列表中使用</h3>
      <RedPacket
        name="恭喜发财"
        value={88}
        inList
        onClick={() => console.log('查看详情')}
      />
    </div>
  );
}
```

## Props

### RedPacketProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| name | string | - | 红包标题/祝福语 |
| value | number | - | 红包金额 |
| condition | string | - | 使用条件描述 |
| endAt | number | - | 失效日期时间戳 |
| dateDesc | ReactNode | - | 有效期描述文本 |
| desc | ReactNode | - | 其他描述信息 |
| image | string | - | 主图地址（用于现金红包等场景） |
| status | 'normal' \| 'nearExpired' \| 'expired' \| 'used' | 'normal' | 红包状态 |
| tag | string | - | 标签文本 |
| inList | boolean | false | 是否在列表中使用 |
| variant | 'redPacket' \| 'cash' \| 'image' | 'redPacket' | 红包类型 |
| btnText | string | '查看' | 按钮文本 |
| onClick | (e: React.MouseEvent) => void | - | 点击事件回调 |
