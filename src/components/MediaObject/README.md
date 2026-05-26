# MediaObject 图文组件

MediaObject 图文组件用于展示图片和文字的组合布局，常用于联系人、媒体内容等展示。

## 代码演示

```jsx
import React from 'react';
import { MediaObject } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>图文卡片</h3>
      <MediaObject
        picUrl="//example.com/avatar.jpg"
        picAlt="头像"
        picSize="md"
        title="联系人名称"
        meta={<div>在线</div>}
      />

      <h3>仅图片</h3>
      <MediaObject
        picUrl="//example.com/image.jpg"
        picAlt="图片"
        picSize="lg"
        title="图片标题"
      />
    </div>
  );
}
```

## Props

### MediaObjectProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| picUrl | string | - | 图片地址 |
| picAlt | string | - | 图片 alt 文本 |
| picSize | 'sm' \| 'md' \| 'lg' | - | 图片尺寸 |
| title | string | - | 标题 |
| meta | ReactNode | - | 元信息 |
