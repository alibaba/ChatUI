# Card 卡片组件

Card 组件用于内容分组和信息展示，提供了灵活的布局和样式选项。

## 使用场景

- 内容容器
- 商品展示
- 信息卡片
- 消息卡片
- 列表项容器

## 代码演示

```jsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardHeader,
  CardTitle,
  CardText,
  CardContent,
  CardActions,
  Button
} from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Card>
        <CardContent>
          <p>这是一个基础卡片</p>
        </CardContent>
      </Card>

      <h3>不同尺寸</h3>
      <Card size="xs">超小卡片</Card>
      <Card size="sm">小卡片</Card>
      <Card size="md">中等卡片</Card>
      <Card size="lg">大卡片</Card>
      <Card size="xl">超大卡片</Card>

      <h3>流式布局</h3>
      <Card fluid>全宽卡片</Card>

      <h3>完整示例</h3>
      <Card>
        <CardMedia image="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg" />
        <CardHeader>
          <CardTitle>卡片标题</CardTitle>
          <CardText>副标题或描述文字</CardText>
        </CardHeader>
        <CardContent>
          <p>这是卡片的主要内容区域，可以放置任意内容。</p>
        </CardContent>
        <CardActions>
          <Button>取消</Button>
          <Button color="primary">确认</Button>
        </CardActions>
      </Card>
    </div>
  );
}
```

## Props

### CardProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| size | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | - | 卡片尺寸 |
| fluid | boolean \| `'order'` | `false` | 是否全宽显示 |
| children | ReactNode | - | 卡片内容 |

### CardMediaProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| image | string | - | 图片地址 |
| color | string | - | 背景颜色 |

### CardHeaderProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 头部内容 |

### CardTitleProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 标题内容 |

### CardTextProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 文本内容 |

### CardContentProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 主要内容 |

### CardActionsProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 操作按钮区域 |

## 注意事项

- Card 组件采用组合式设计，各子组件可按需使用
- `fluid` 属性设为 `'order'` 时适用于订单卡片场景
- 各子组件的顺序会影响最终的视觉呈现
