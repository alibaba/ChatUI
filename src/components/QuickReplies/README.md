# QuickReplies 快捷回复组件

QuickReplies 组件用于展示快捷回复选项，用户可以快速选择回复内容。

## 使用场景

- 智能客服
- 问答引导
- 快速回复
- 选项选择
- 对话流程

## 代码演示

```jsx
import React, { useState } from 'react';
import { QuickReplies } from '@chatui/core';

export default function() {
  const [replies] = useState([
    { name: '1', text: '是的', isNew: true },
    { name: '2', text: '不是' },
    { name: '3', text: '查看详情' },
    { name: '4', text: '联系客服' },
  ]);

  const handleClick = (item) => {
    console.log('选择:', item);
  };

  return (
    <div>
      <h3>基础用法</h3>
      <QuickReplies items={replies} onClick={handleClick} />

      <h3>带图标</h3>
      <QuickReplies
        items={[
          { name: '1', text: '👍 赞', icon: 'thumbs-up' },
          { name: '2', text: '❌ 不需要', icon: 'close' },
          { name: '3', text: '📞 联系我', icon: 'phone' },
        ]}
        onClick={handleClick}
      />

      <h3>可滚动</h3>
      <QuickReplies
        items={[
          { name: '1', text: '选项1' },
          { name: '2', text: '选项2' },
          { name: '3', text: '选项3' },
          { name: '4', text: '选项4' },
          { name: '5', text: '选项5' },
          { name: '6', text: '选项6' },
        ]}
        onClick={handleClick}
      />
    </div>
  );
}
```

## Props

### QuickRepliesProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| items | QuickReplyItemProps[] | `[]` | 快捷回复选项数组 |
| visible | boolean | `true` | 是否可见 |
| onClick | (item: QuickReplyItemProps) => void | - | 点击选项回调 |

### QuickReplyItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| name | string | - | 选项标识 |
| text | string | - | 选项文本 |
| icon | string | - | 图标类型 |
| img | string | - | 图片地址 |
| isNew | boolean | `false` | 是否显示新标签 |
| isHighlight | boolean | `false` | 是否高亮显示 |

## 注意事项

- 选项会自动横向排列，超出可滚动
- `isNew` 会在选项上显示"新"标签
- `isHighlight` 会使用高亮样式
- 点击后通常会隐藏快捷回复区域
