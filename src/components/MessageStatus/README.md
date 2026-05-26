# MessageStatus 消息状态组件

MessageStatus 消息状态组件用于显示消息的发送状态，支持 pending（发送中）、sent（已发送）、fail（发送失败）三种状态。

## 代码演示

```jsx
import React from 'react';
import { MessageStatus } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>发送中</h3>
      <MessageStatus
        status="pending"
        onRetry={() => console.log('重试发送')}
      />

      <h3>发送失败</h3>
      <MessageStatus
        status="fail"
        onRetry={() => console.log('重试发送')}
      />

      <h3>自定义延迟</h3>
      <MessageStatus
        status="pending"
        delay={500}
        maxDelay={10000}
        retryInterval={3000}
        onRetry={(isAutoRetry) => console.log(isAutoRetry ? '自动重试' : '手动重试')}
      />
    </div>
  );
}
```

## Props

### MessageStatusProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| status | 'pending' \| 'sent' \| 'fail' | - | 消息状态 |
| delay | number | 800 | 显示 loading 状态的延迟（毫秒） |
| maxDelay | number | 12000 | 最大延迟时间（毫秒） |
| retryInterval | number | 5000 | 自动重试间隔（毫秒） |
| onRetry | (isAutoRetry?: boolean) => void | - | 重试回调 |
| onChange | (type: '' \| 'loading' \| 'fail') => void | - | 状态变化回调 |
