# Form 表单组件

Form 表单组件用于包裹表单元素，提供统一的表单结构。

## 代码演示

```jsx
import React from 'react';
import { Form, FormItem, FormActions, Input, Button } from '@chatui/core';

export default function() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FormItem label="用户名" help="请输入用户名" required>
        <Input placeholder="请输入" />
      </FormItem>
      <FormItem label="密码" required>
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormActions>
        <Button color="primary" htmlType="submit">提交</Button>
        <Button>取消</Button>
      </FormActions>
    </Form>
  );
}
```

## Form

表单容器组件。

### FormProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| children | ReactNode | - | 子元素 |
| theme | string | - | **已废弃** 使用 `<Input>` 的 `variant` 属性代替 |

## FormItem

表单项组件。

### FormItemProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| label | string \| ReactNode | - | 标签文本 |
| help | string | - | 帮助文本 |
| required | boolean | false | 是否必填 |
| invalid | boolean | false | 是否验证失败 |
| hidden | boolean | false | 是否隐藏 |
| children | ReactNode | - | 表单控件 |

## FormActions

表单操作区组件。

```jsx
<FormActions>
  <Button color="primary">提交</Button>
  <Button>取消</Button>
</FormActions>
```
