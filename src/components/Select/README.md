# Select 选择框组件

Select 组件用于从选项列表中选择一个或多个值。

## 使用场景

- 表单选择
- 下拉菜单
- 选项列表
- 分类筛选
- 设置选项

## 代码演示

```jsx
import React, { useState } from 'react';
import { Select } from '@chatui/core';

export default function() {
  const [value, setValue] = useState('');

  return (
    <div>
      <h3>基础用法</h3>
      <Select value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="1">选项1</option>
        <option value="2">选项2</option>
        <option value="3">选项3</option>
      </Select>

      <h3>带占位符</h3>
      <Select placeholder="请选择" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="apple">苹果</option>
        <option value="banana">香蕉</option>
        <option value="orange">橙子</option>
      </Select>

      <h3>不同样式</h3>
      <Select variant="outline" placeholder="轮廓样式">
        <option value="1">选项1</option>
        <option value="2">选项2</option>
      </Select>

      <Select variant="filled" placeholder="填充样式">
        <option value="1">选项1</option>
        <option value="2">选项2</option>
      </Select>

      <Select variant="flushed" placeholder="底线样式">
        <option value="1">选项1</option>
        <option value="2">选项2</option>
      </Select>

      <h3>禁用状态</h3>
      <Select disabled>
        <option value="1">选项1</option>
        <option value="2">选项2</option>
      </Select>
    </div>
  );
}
```

## Props

### SelectProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| placeholder | string | - | 占位文本 |
| variant | `'outline' \| 'filled' \| 'flushed'` | `'outline'` | 选择框样式变体 |
| value | string | - | 选中的值 |
| onChange | (event: ChangeEvent) => void | - | 值变化时的回调 |
| disabled | boolean | `false` | 是否禁用 |
| children | ReactNode | - | option 选项 |

## 注意事项

- Select 组件基于原生 `<select>` 元素，支持所有原生属性
- 当设置 `placeholder` 时，会自动添加一个空值的 option 作为占位项
- 样式与 Input 组件保持一致，便于表单统一设计
