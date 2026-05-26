# Message 消息组件

Message 组件用于展示聊天消息，支持多种消息类型和位置。

## 使用场景

- 聊天对话
- 消息列表
- 问答界面
- 客服对话
- 评论展示

## 代码演示

```jsx
import React from 'react';
import { Message, Bubble } from '@chatui/core';

export default function() {
  const renderMessageContent = (message) => {
    const { type, content } = message;

    switch (type) {
      case 'text':
        return <Bubble content={content.text} />;
      case 'image':
        return <Bubble type="image"><img src={content.picUrl} alt="" /></Bubble>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h3>左侧消息</h3>
      <Message
        _id="1"
        type="text"
        content={{ text: '你好' }}
        position="left"
        user={{
          avatar: '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg',
          name: '对方'
        }}
        renderMessageContent={renderMessageContent}
      />

      <h3>右侧消息</h3>
      <Message
        _id="2"
        type="text"
        content={{ text: '你好！' }}
        position="right"
        user={{
          avatar: '//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg',
          name: '我'
        }}
        renderMessageContent={renderMessageContent}
      />

      <h3>系统消息</h3>
      <Message
        _id="3"
        type="system"
        content={{ text: '对方撤回了一条消息' }}
      />

      <h3>带时间戳</h3>
      <Message
        _id="4"
        type="text"
        content={{ text: '显示时间的消息' }}
        position="left"
        hasTime
        createdAt={Date.now()}
        renderMessageContent={renderMessageContent}
      />
    </div>
  );
}
```

## Props

### MessageProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| _id | string | - | 消息唯一ID（必填） |
| type | string | - | 消息类型（必填） |
| content | any | - | 消息内容 |
| createdAt | number | - | 消息创建时间（时间戳） |
| user | User | - | 消息发送者信息 |
| position | `'left' \| 'right' \| 'center' \| 'pop'` | `'left'` | 消息位置 |
| hasTime | boolean | `true` | 是否显示时间 |
| status | IMessageStatus | - | 消息状态 |
| renderMessageContent | (message: MessageProps) => ReactNode | - | 消息内容渲染函数（必填） |

### User

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| avatar | string | - | 头像地址 |
| name | string | - | 用户名 |
| avatarAlt | string | - | 头像替代文本 |
| url | string | - | 用户主页链接 |

## 注意事项

- `type` 为 `'system'` 时会渲染为系统消息
- `renderMessageContent` 函数必须提供，用于自定义消息内容渲染
- `position` 为 `'left'` 或 `'right'` 时会显示头像
- Message 组件使用 React.memo 优化性能
