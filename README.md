<p align="center">
  <a href="https://chatui.io/">
    <img width="109" height="28" src="https://gw.alicdn.com/tfs/TB1uYH4QoY1gK0jSZFMXXaWcVXa-218-56.svg" alt="ChatUI">
  </a>
</p>

<p align="center">服务于智能对话领域的设计和开发体系，助力智能对话机器人的搭建</p>

## 安装

```bash
npm install chatui --save
```

```bash
yarn add chatui
```

## 示例

```jsx
import Chat, { Bubble, useMessages } from 'chatui';
import 'chatui/dist/index.css';

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

## License

MIT
