# Carousel 轮播图组件

Carousel 轮播图组件，支持自动播放、手动拖拽、循环轮播等功能，适用于图片轮播、广告展示等场景。

## 代码演示

```jsx
import React from 'react';
import { Carousel } from '@chatui/core';

export default function() {
  return (
    <Carousel
      autoPlay
      interval={3000}
      dots
      onChange={(index) => console.log('切换到', index)}
    >
      <div style={{ background: '#f40', height: 200 }}>Slide 1</div>
      <div style={{ background: '#f80', height: 200 }}>Slide 2</div>
      <div style={{ background: '#fc0', height: 200 }}>Slide 3</div>
    </Carousel>
  );
}
```

## Props

### CarouselProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| children | ReactNode | - | 轮播内容 |
| className | string | - | 自定义类名 |
| startIndex | number | 0 | 初始显示的轮播项索引 |
| draggable | boolean | true | 是否支持拖拽切换 |
| clickDragThreshold | number | 10 | 判断点击还是拖拽的阈值 |
| duration | number | 300 | 切换动画时长（毫秒） |
| easing | string | 'ease' | 切换缓动函数 |
| threshold | number | 20 | 拖拽触发切换的阈值 |
| loop | boolean | true | 是否循环轮播 |
| rtl | boolean | false | 是否支持 RTL 布局 |
| autoPlay | boolean | false | 是否自动播放 |
| interval | number | 4000 | 自动播放间隔（毫秒） |
| dots | boolean | true | 是否显示指示点 |
| onChange | (activeIndex?: number) => void | - | 切换时的回调函数 |

### CarouselHandle

| 方法 | 说明 |
| --- | --- |
| goTo(n: number) | 切换到指定索引 |
| prev() | 切换到上一个 |
| next() | 切换到下一个 |

## CarouselItem

轮播项子组件。

### CarouselItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| width | string | - | 轮播项宽度 |
| children | ReactNode | - | 轮播项内容 |
