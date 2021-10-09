<h1 align="center">
  <a href="https://chatui.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="ChatUI">
  </a>
</h1>

<p align="center">服务于对话领域的设计和开发体系</p>

<p align="center">官网：<a href="https://chatui.io/" target="_blank">https://chatui.io</a></p>

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

[English](./README.md) | 简体中文

## 特性

- 😎 **最佳实践**：基于阿里小蜜业务积累和打磨的对话式交互最佳实践
- 🛡 **TypeScript**：使用 TypeScript 开发，提供完整的类型定义文件
- 📱 **响应式**：响应式布局，在无线和 PC 端都可以友好展现
- ♿ **障碍**：支持无障碍，已通过深圳市无障碍研究会的认证
- 🎨 **主题**：支持灵活的样式定制，以满足业务和品牌上多样化的视觉需求
- 🌍 **国际化**：支持多语言和本土化特性

## 兼容环境

- 现代浏览器 (支持 [CSS Variables](https://caniuse.com/css-variables))
- IE 11 (需要 [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11) 和 [CSS Variables Polyfill](https://github.com/nuxodin/ie11CustomProperties) / [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill))

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /><br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/android-webview/android-webview_48x48.png" alt="Android WebView" width="24px" height="24px" /><br>Android WebView |
| --- | --- | --- | --- | --- | --- |
| 16+ | 31+ | 49+ | 9.1+ | 9.3+ | 6+ |

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

[![DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/chatui-demo-o6n3z?fontsize=14&hidenavigation=1&theme=dark)

### 本地开发

```bash
cd storybook
npm i
npm run storybook
```

### 定制主题

参考 [定制主题](https://chatui.io/docs/customize-theme) 文档。

## 国际化

参考 [国际化](https://chatui.io/docs/i18n) 文档。

## 交流讨论

<img width="400" height="515" src="https://img.alicdn.com/imgextra/i2/O1CN01yO0rNg1ZDKHKIulc8_!!6000000003160-0-tps-828-1068.jpg">

## License

MIT
