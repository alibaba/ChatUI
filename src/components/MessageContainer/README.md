# MessageContainer 消息容器组件

MessageContainer 消息容器组件用于展示聊天消息列表，支持下拉刷新、新消息提示、滚动到底部等功能。

## 代码演示

```jsx
import React from 'react';
import { MessageContainer } from '@chatui/core';

export default function() {
  const messages = [
    { _id: '1', position: 'left', content: '你好' },
    { _id: '2', position: 'right', content: '你好，有什么可以帮助你的吗？' },
  ];

  return (
    <MessageContainer
      messages={messages}
      isTyping={false}
      renderMessageContent={(msg) => <div>{msg.content}</div>}
      onRefresh={() => Promise.resolve()}
      onBackBottomClick={() => console.log('回到底部')}
    />
  );
}
```

## Props

### MessageContainerProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| messages | MessageProps[] | - | 消息列表 |
| renderMessageContent | (message: MessageProps) => ReactNode | - | 渲染消息内容的函数 |
| isTyping | boolean | - | 是否显示正在输入状态 |
| loadMoreText | string | - | 加载更多的文本提示 |
| onRefresh | () => Promise<any> | - | 下拉刷新回调 |
| onScroll | (event: React.UIEvent) => void | - | 滚动事件回调 |
| renderBeforeMessageList | () => ReactNode | - | 在消息列表前渲染的内容 |
| onBackBottomShow | () => void | - | 显示"回到底部"按钮时的回调 |
| onBackBottomClick | () => void | - | 点击"回到底部"按钮时的回调 |

### MessageContainerHandle

| 方法 | 说明 |
| --- | --- |
| ref | 获取容器元素的 ref |
| scrollToEnd(options?: ScrollToEndOptions) | 滚动到底部 |
