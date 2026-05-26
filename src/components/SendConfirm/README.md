# SendConfirm 发送确认组件

SendConfirm 发送确认组件用于在发送图片等消息前弹出确认框，让用户确认后再发送。

## 代码演示

```jsx
import React, { useState } from 'react';
import { SendConfirm } from '@chatui/core';

export default function() {
  const [file, setFile] = useState<Blob | null>(null);

  const handleSend = () => {
    console.log('发送文件');
    setFile(null);
  };

  const handleCancel = () => {
    setFile(null);
  };

  return (
    <SendConfirm
      file={file}
      onSend={handleSend}
      onCancel={handleCancel}
    />
  );
}
```

## Props

### SendConfirmProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| file | Blob | - | 要发送的文件 |
| onCancel | () => void | - | 取消发送回调 |
| onSend | () => void | - | 确认发送回调 |
