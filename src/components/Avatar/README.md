# Avatar 头像组件

Avatar 组件用于展示用户头像，支持多种尺寸和形状，适用于聊天界面和用户信息展示。

## 使用场景

- 用户个人资料展示
- 聊天消息列表
- 评论和反馈展示
- 联系人列表
- 团队成员展示

## 代码演示

```jsx
import React from 'react';
import { Avatar } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Avatar src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />

      <h3>不同尺寸</h3>
      <Avatar size="sm" src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />
      <Avatar size="md" src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />
      <Avatar size="lg" src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />

      <h3>不同形状</h3>
      <Avatar shape="circle" src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />
      <Avatar shape="square" src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />

      <h3>可点击跳转</h3>
      <Avatar
        src="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        url="/user/profile"
      />

      <h3>文字头像</h3>
      <Avatar>U</Avatar>
      <Avatar>用户</Avatar>
    </div>
  );
}
```

## Props

### AvatarProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| src | string | - | 头像图片地址 |
| alt | string | - | 图片替代文本 |
| url | string | - | 点击跳转的链接地址 |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | 头像尺寸 |
| shape | `'circle' \| 'square'` | `'circle'` | 头像形状 |
| children | ReactNode | - | 文字内容，当没有图片时显示 |

## 尺寸说明

| 尺寸 | 说明 | 适用场景 |
| --- | --- | --- |
| `sm` | 小尺寸 | 列表项、紧凑布局 |
| `md` | 中等尺寸（默认） | 一般场景 |
| `lg` | 大尺寸 | 个人资料页、重要展示 |
