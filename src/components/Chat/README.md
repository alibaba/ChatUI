# Chat 聊天容器组件

Chat 组件是聊天界面的主容器，用于组织和展示聊天相关的所有元素。

## 使用场景

- 聊天应用主界面
- 客服对话界面
- 即时通讯应用
- 问答系统
- 对话流程

## 代码演示

```jsx
import React from 'react';
import { Chat, Message, Composer, QuickReplies, Navbar } from '@chatui/core';

export default function() {
  const messages = [
    {
      _id: '1',
      type: 'text',
      content: { text: '你好' },
      user: { avatar: '//avatar.url', name: '对方' },
    },
  ];

  const renderMessageContent = (msg) => {
    return <div>{msg.content.text}</div>;
  };

  return (
    <Chat
      navbar={<Navbar title="聊天" />}
      messages={messages}
      renderMessageContent={renderMessageContent}
      quickReplies={[
        { name: '1', text: '是的' },
        { name: '2', text: '不是' },
      ]}
    />
  );
}
```

## Props

### ChatProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| locale | string | `'zh-CN'` | 语言设置 |
| navbar | ReactNode | - | 导航栏组件 |
| messages | MessageProps[] | `[]` | 消息列表 |
| renderMessageContent | (msg: MessageProps) => ReactNode | - | 消息渲染函数 |
| quickReplies | QuickReplyItemProps[] | - | 快捷回复选项 |
| onQuickReplyClick | (item: QuickReplyItemProps) => void | - | 快捷回复点击回调 |
| loadMoreText | string | - | 加载更多文本 |
| onRefresh | () => void | - | 下拉刷新回调 |

## 注意事项

- Chat 组件提供了完整的聊天界面布局
- 自动处理消息列表的滚动和定位
- 集成了消息、快捷回复等常用功能
- 支持下拉刷新加载历史消息
