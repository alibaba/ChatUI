# Navbar 导航栏组件

Navbar 组件用于页面顶部导航，支持标题、logo、左右侧按钮等功能。

## 使用场景

- 页面顶部导航
- 应用标题栏
- 返回导航
- 功能入口
- 品牌展示

## 代码演示

```jsx
import React from 'react';
import { Navbar } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Navbar title="页面标题" />

      <h3>带返回按钮</h3>
      <Navbar
        title="页面标题"
        leftContent={{
          icon: 'chevron-left',
          onClick: () => window.history.back()
        }}
      />

      <h3>带右侧按钮</h3>
      <Navbar
        title="聊天"
        rightContent={[
          { icon: 'search', onClick: () => console.log('search') },
          { icon: 'more-v', onClick: () => console.log('more') }
        ]}
      />

      <h3>带 Logo</h3>
      <Navbar
        title="ChatUI"
        logo="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        rightContent={[
          { icon: 'apps', onClick: () => console.log('apps') }
        ]}
      />

      <h3>带描述</h3>
      <Navbar
        title="对话"
        desc="在线"
        leftContent={{
          icon: 'chevron-left',
          onClick: () => window.history.back()
        }}
      />

      <h3>左对齐</h3>
      <Navbar
        title="页面标题"
        align="left"
        leftContent={{
          icon: 'chevron-left',
          onClick: () => window.history.back()
        }}
      />

      <h3>自定义右侧内容</h3>
      <Navbar
        title="设置"
        rightSlot={
          <button>保存</button>
        }
      />
    </div>
  );
}
```

## Props

### NavbarProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| title | string | - | 导航栏标题（必填） |
| logo | string | - | Logo 图片地址 |
| desc | ReactNode | - | 描述文字 |
| leftContent | IconButtonProps | - | 左侧按钮配置 |
| rightContent | IconButtonProps[] | `[]` | 右侧按钮配置数组 |
| rightSlot | ReactNode | - | 右侧自定义内容 |
| align | `'left' \| 'center'` | `'center'` | 标题对齐方式 |

## 注意事项

- `leftContent` 和 `rightContent` 接收 IconButton 组件的 props
- 当设置 `logo` 且 `align` 为 `center` 时，标题会被隐藏
- `rightSlot` 和 `rightContent` 可以同时使用
- 适配了安全区域，在刘海屏等设备上会自动添加顶部间距
