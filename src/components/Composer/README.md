# Composer 输入组合组件

Composer 组件是一个完整的聊天输入区域，集成了输入框、工具栏、发送按钮等功能。

## 使用场景

- 聊天输入
- 消息发送
- 富文本编辑
- 文件上传入口
- 表情选择

## 代码演示

```jsx
import React, { useState } from 'react';
import { Composer } from '@chatui/core';

export default function() {
  const [inputValue, setInputValue] = useState('');

  const handleSend = (type, val) => {
    if (type === 'text' && val.trim()) {
      console.log('发送文本:', val);
      setInputValue('');
    }
  };

  const handleToolbarClick = (item, index) => {
    console.log('点击工具:', item, index);
  };

  const toolbarItems = [
    {
      type: 'image',
      icon: 'image',
      title: '图片',
    },
    {
      type: 'camera',
      icon: 'camera',
      title: '拍照',
    },
    {
      type: 'file',
      icon: 'file',
      title: '文件',
    },
  ];

  return (
    <div>
      <h3>基础用法</h3>
      <Composer
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        onAccessoryToggle={() => console.log('切换工具栏')}
      />

      <h3>带工具栏</h3>
      <Composer
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        toolbar={toolbarItems}
        onToolClick={handleToolbarClick}
        onAccessoryToggle={() => console.log('切换工具栏')}
      />

      <h3>自定义占位符</h3>
      <Composer
        value={inputValue}
        placeholder="请输入消息..."
        onChange={setInputValue}
        onSend={handleSend}
      />

      <h3>带右侧操作</h3>
      <Composer
        value={inputValue}
        onChange={setInputValue}
        onSend={handleSend}
        rightAction={{
          icon: 'voice',
          onClick: () => console.log('语音输入'),
        }}
      />
    </div>
  );
}
```

## Props

### ComposerProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| value | string | - | 输入框的值 |
| placeholder | string | `'请输入...'` | 占位文本 |
| inputType | string | `'text'` | 输入框类型 |
| text | string | - | 输入框的值（别名，已废弃） |
| onInputChange | (value: string) => void | - | 输入变化回调（已废弃） |
| onChange | (value: string) => void | - | 输入变化回调 |
| onSend | (type: string, value: string) => void | - | 发送消息回调 |
| onImageSend | (file: File) => void | - | 发送图片回调 |
| onFocus | () => void | - | 输入框聚焦回调 |
| onBlur | () => void | - | 输入框失焦回调 |
| rightAction | Action | - | 右侧操作按钮配置 |
| toolbar | ToolbarItem[] | - | 工具栏配置 |
| onToolClick | (item: ToolbarItem, index: number) => void | - | 工具栏点击回调 |
| onAccessoryToggle | () => void | - | 切换附件栏回调 |

## 注意事项

- Composer 会自动处理输入框的高度自适应
- 当输入内容为空时，发送按钮会被隐藏或禁用
- 支持粘贴图片直接发送
- 工具栏默认折叠，点击加号按钮展开
