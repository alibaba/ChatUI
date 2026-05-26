# ImageList 图片列表组件

ImageList 图片列表组件用于展示一组图片，支持点击回调。

## 代码演示

```jsx
import React from 'react';
import { ImageList } from '@chatui/core';

export default function() {
  const images = [
    { id: '1', src: '//example.com/1.jpg' },
    { id: '2', src: '//example.com/2.jpg' },
    { id: '3', src: '//example.com/3.jpg' },
  ];

  return (
    <ImageList
      list={images}
      onClick={(img, e) => console.log('点击了', img.id)}
    />
  );
}
```

## Props

### ImageListProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| list | Array<{ src: string; id?: string; [k: string]: any }> | - | 图片列表 |
| onClick | (img: object, event: React.MouseEvent) => void | - | 图片点击回调 |
