# MultiRedPacket 拼包组件

MultiRedPacket 拼包组件用于展示多人红包（拼手气红包）信息。

## 代码演示

```jsx
import React from 'react';
import { MultiRedPacket } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>普通拼包</h3>
      <MultiRedPacket
        name="恭喜发财，大吉大利"
        count={10}
        total={100}
        onClick={() => console.log('领取红包')}
      />

      <h3>现金红包</h3>
      <MultiRedPacket
        name="恭喜发财，大吉大利"
        count={5}
        total={50}
        variant="cash"
        btnText="立即领取"
        onClick={() => console.log('领取现金红包')}
      />
    </div>
  );
}
```

## Props

### MultiRedPacketProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| name | string | - | 红包标题/祝福语 |
| count | number | - | 红包个数 |
| total | number | - | 红包总金额（元） |
| variant | 'redPacket' \| 'cash' | 'redPacket' | 红包类型 |
| btnText | string | - | 按钮文本 |
| onClick | (e: React.MouseEvent) => void | - | 点击事件回调 |
