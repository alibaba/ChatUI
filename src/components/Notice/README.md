# Notice 通知组件

Notice 组件用于展示通知信息，支持多种样式和交互。

## 使用场景

- 系统通知
- 公告展示
- 重要提示
- 活动通知
- 消息提醒

## 代码演示

```jsx
import React from 'react';
import { Notice } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Notice content="这是一条通知消息" />

      <h3>可关闭</h3>
      <Notice
        content="这是一条可关闭的通知"
        closable
        onClose={() => console.log('关闭')}
      />

      <h3>带图标</h3>
      <Notice
        icon="notification"
        content="重要通知：系统将在今晚进行维护"
      />

      <h3>带操作</h3>
      <Notice
        content="您有一条新消息"
        action={{
          text: '查看',
          onClick: () => console.log('查看消息')
        }}
      />
    </div>
  );
}
```

## Props

### NoticeProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| content | ReactNode | - | 通知内容 |
| icon | string | - | 图标类型 |
| closable | boolean | `false` | 是否可关闭 |
| onClose | () => void | - | 关闭回调 |
| action | { text: string, onClick: () => void } | - | 操作按钮配置 |

## 注意事项

- Notice 通常显示在页面顶部或重要位置
- closable 为 true 时显示关闭按钮
- action 用于添加快捷操作
