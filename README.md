<h1 align="center">
  <a href="https://chatui.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="ChatUI">
  </a>
</h1>

<p align="center">The UI design language and React library for Conversational UI</p>

<p align="center">Website：<a href="https://chatui.io/" target="_blank">https://chatui.io</a></p>

<div align="center">

[![LICENSE](https://img.shields.io/npm/l/@chatui/core?style=flat-square)](https://github.com/alibaba/ChatUI/blob/master/LICENSE)
[![NPM version](https://img.shields.io/npm/v/@chatui/core?style=flat-square)](https://www.npmjs.com/package/@chatui/core)
[![NPM downloads](https://img.shields.io/npm/dm/@chatui/core?style=flat-square)](https://www.npmjs.com/package/@chatui/core)
[![Gzip Size](https://img.badgesize.io/https://unpkg.com/@chatui/core@0.1.0/dist/index.js?compression=gzip)](https://unpkg.com/@chatui/core@0.1.0/dist/index.js)
[![Jsdelivr Hits](https://img.shields.io/jsdelivr/npm/hm/@chatui/core?style=flat-square)](https://cdn.jsdelivr.net/npm/@chatui/core)

</div>

<p align="center">
  <img width="750" src="https://gw.alicdn.com/tfs/TB1WTl.lQ9l0K4jSZFKXXXFjpXa-1500-833.jpg">
</p>

English | [简体中文](./README.zh-CN.md)

## Features

- 😎 **Best Practices**: The best practice for chat interaction based on our experience of Alime Chatbot
- 🛡 **TypeScript**: Written in TypeScript with predictable static types
- 📱 **Responsive**: Responsive design to adapt automatically to whatever device
- ♿ **Accessibility**: Accessibility support and get the certification from Accessibility Research Association
- 🎨 **Theming**: Powerful theme customization in every detail
- 🌍 **International**: Internationalization support for dozens of languages

## Environment Support

- Modern browsers (support [CSS Variables](https://caniuse.com/css-variables))
- Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11) and [CSS Variables Polyfill](https://github.com/nuxodin/ie11CustomProperties) / [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill))

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /><br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/android-webview/android-webview_48x48.png" alt="Android WebView" width="24px" height="24px" /><br>Android WebView |
| --- | --- | --- | --- | --- | --- |
| 16+ | 31+ | 49+ | 9.1+ | 9.3+ | 6+ |

## Install

```bash
npm install @chatui/core --save
```

```bash
yarn add @chatui/core
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

[![DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/chatui-demo-o6n3z?fontsize=14&hidenavigation=1&theme=dark)

### Development

```bash
cd storybook
npm i
npm run storybook
```

## Theme

Visit [Customize Theme](https://chatui.io/docs/customize-theme) for detail

## Internationalization

Visit [i18n](https://chatui.io/docs/i18n) for detail

## Discussion

<img width="400" height="515" src="https://img.alicdn.com/imgextra/i2/O1CN01yO0rNg1ZDKHKIulc8_!!6000000003160-0-tps-828-1068.jpg">

## License

MIT
