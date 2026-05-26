# List 列表组件

List 组件用于展示列表数据，支持边框和不同的样式变体。

## 使用场景

- 菜单列表
- 设置项列表
- 选项列表
- 信息列表
- 导航列表

## 代码演示

```jsx
import React from 'react';
import { List, ListItem } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <List>
        <ListItem content="列表项 1" />
        <ListItem content="列表项 2" />
        <ListItem content="列表项 3" />
      </List>

      <h3>带边框</h3>
      <List bordered>
        <ListItem content="列表项 1" />
        <ListItem content="列表项 2" />
        <ListItem content="列表项 3" />
      </List>

      <h3>带右侧图标</h3>
      <List>
        <ListItem content="个人信息" rightIcon="chevron-right" />
        <ListItem content="账号设置" rightIcon="chevron-right" />
        <ListItem content="关于我们" rightIcon="chevron-right" />
      </List>

      <h3>可点击列表</h3>
      <List>
        <ListItem
          content="点击我"
          rightIcon="chevron-right"
          onClick={() => console.log('clicked')}
        />
        <ListItem
          as="a"
          href="/profile"
          content="个人资料"
          rightIcon="chevron-right"
        />
      </List>

      <h3>文本截断</h3>
      <List>
        <ListItem
          content="这是一段很长的文本内容，超出容器宽度时会被截断并显示省略号"
          ellipsis
        />
      </List>

      <h3>按钮样式</h3>
      <List variant="buttons">
        <ListItem content="选项 1" />
        <ListItem content="选项 2" />
        <ListItem content="选项 3" />
      </List>

      <h3>自定义内容</h3>
      <List>
        <ListItem>
          <div>
            <h4>自定义标题</h4>
            <p>自定义描述文字</p>
          </div>
        </ListItem>
      </List>
    </div>
  );
}
```

## Props

### ListProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| bordered | boolean | `false` | 是否显示边框 |
| variant | `'buttons'` | - | 列表样式变体 |
| children | ReactNode | - | ListItem 组件 |

### ListItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| as | React.ElementType | `'div'` | 渲染的 HTML 元素类型 |
| content | ReactNode | - | 列表项内容 |
| ellipsis | boolean | `false` | 是否截断文本 |
| rightIcon | string | - | 右侧图标类型 |
| onClick | (event: MouseEvent) => void | - | 点击事件 |
| children | ReactNode | - | 自定义内容 |

## 注意事项

- ListItem 必须作为 List 的直接子元素
- 当 `as="a"` 时，需要提供 `href` 属性
- `content` 和 `children` 可以同时使用，但 `content` 会被优先处理
- `ellipsis` 仅对单行文本有效
