<p align="center">
  <a href="https://chatui.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="ChatUI">
  </a>
</p>

<p align="center">The UI design language and React library for Chatbot UI</p>

<p align="center">Website：<a href="https://chatui.io/" target="_blank">https://chatui.io</a></p>

<p align="center">
  <img width="750" src="https://gw.alicdn.com/tfs/TB1WTl.lQ9l0K4jSZFKXXXFjpXa-1500-833.jpg">
</p>

English | [简体中文](./README.zh-CN.md)

## Features

- The best practice for chatbot interaction and design based on our experience of Alime Chatbot
- Written in TypeScript with predictable static types
- Responsive design to adapt automatically to whatever device
- Accessibility support and get the certification from Accessibility Research Association
- Powerful theme customization in every detail
- Internationalization support for dozens of languages

## Environment Support

- PC
- mobile
- [CSS Variables](https://caniuse.com/css-variables)

## Install

```bash
npm install chatui --save
```

```bash
yarn add chatui
```

## Usage

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
      navbar={{ title: 'Assistant' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
};
```

## Theme

Visit [Customize Theme](https://chatui.io/docs/customize-theme) for detail

## Internationalization

Visit [i18n](https://chatui.io/docs/i18n) for detail

## Discussion

<img width="414" height="534" src="https://gw.alicdn.com/imgextra/i4/19999999999999/O1CN01SF0doL2NjaswwFNRN_!!19999999999999-0-tps.jpg">

## License

MIT
