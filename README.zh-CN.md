<p align="center">
  <a href="https://chatui.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="ChatUI">
  </a>
</p>

<p align="center">服务于智能对话领域的设计和开发体系，助力智能对话机器人的搭建</p>

<p align="center">官网：<a href="https://chatui.io/" target="_blank">https://chatui.io</a></p>

<p align="center">
  <img width="750" src="https://gw.alicdn.com/tfs/TB1WTl.lQ9l0K4jSZFKXXXFjpXa-1500-833.jpg">
</p>

[English](./README.md) | 简体中文

## 特性

- 基于阿里小蜜业务积累和打磨的对话式交互和视觉最佳实践
- 使用 TypeScript 开发，提供完整的类型定义文件
- 响应式布局，在无线和 PC 端都可以友好展现
- 支持无障碍，已通过深圳市无障碍研究会的认证
- 支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求
- 支持多语言和本土化特性

## 兼容环境

- PC 端
- 无线端

需要支持 [CSS Variables](https://caniuse.com/css-variables)

## 安装

```bash
npm install @chatui/core --save
```

```bash
yarn add @chatui/core
```

## 示例

```jsx
import Chat, { Bubble, useMessages } from '@chatui/core';
import '@chatui/core/dist/index.css';

const App = () => {
  const { messages, appendMsg, setTyping } = useMessages([]);

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        });
      }, 1000);
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg;
    return <Bubble content={content.text} />;
  }

  return (
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};
```

### 定制主题

参考 [定制主题](https://chatui.io/docs/customize-theme) 文档。

## 国际化

参考 [国际化](https://chatui.io/docs/i18n) 文档。

## 交流讨论

<img width="414" height="534" src="https://img.alicdn.com/tfs/TB1xyv7U7L0gK0jSZFAXXcA9pXa-828-1068.jpg">

## License

MIT
