# Modal 弹窗组件

Modal 组件用于显示模态对话框，支持自定义标题、内容和操作按钮。

## 使用场景

- 确认对话框
- 信息提示
- 表单弹窗
- 内容详情
- 操作确认

## 代码演示

```jsx
import React, { useState } from 'react';
import { Modal, Confirm, Popup, Button } from '@chatui/core';

export default function() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <div>
      <h3>基础 Modal</h3>
      <Button onClick={() => setOpen1(true)}>打开 Modal</Button>
      <Modal
        active={open1}
        title="提示"
        onClose={() => setOpen1(false)}
      >
        <div>这是 Modal 的内容区域</div>
      </Modal>

      <h3>Confirm 确认框</h3>
      <Button onClick={() => setOpen2(true)}>打开 Confirm</Button>
      <Confirm
        active={open2}
        title="删除确认"
        onClose={() => setOpen2(false)}
        actions={[
          { label: '取消', onClick: () => setOpen2(false) },
          { label: '确定', color: 'primary', onClick: () => setOpen2(false) }
        ]}
      >
        <div>确定要删除这条记录吗？</div>
      </Confirm>

      <h3>Popup 底部弹窗</h3>
      <Button onClick={() => setOpen3(true)}>打开 Popup</Button>
      <Popup
        active={open3}
        title="选择操作"
        onClose={() => setOpen3(false)}
        actions={[
          { label: '拍照', onClick: () => setOpen3(false) },
          { label: '从相册选择', onClick: () => setOpen3(false) },
          { label: '取消', onClick: () => setOpen3(false) }
        ]}
      />

      <h3>带头像的 Modal</h3>
      <Modal
        active={open1}
        title="提示"
        avatar="//gw.alicdn.com/tfs/TB1U7FBiAT2gK0jSZPcXXcKkpXa-108-108.jpg"
        onClose={() => setOpen1(false)}
        actions={[
          { label: '取消' },
          { label: '确定', color: 'primary' }
        ]}
      >
        <div>带头像的对话框</div>
      </Modal>
    </div>
  );
}
```

## Props

### ModalProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| active | boolean | - | 是否显示弹窗 |
| className | string | - | 自定义类名 |
| title | string | - | 标题 |
| subTitle | string | - | 副标题 |
| showClose | boolean | `true` | 是否显示关闭按钮 |
| autoFocus | boolean | `true` | 是否自动聚焦 |
| backdrop | boolean \| `'static'` | `true` | 是否显示遮罩，`'static'` 时点击遮罩不关闭 |
| height | number \| string | - | 内容高度 |
| overflow | boolean | `false` | 内容是否可滚动 |
| actions | ButtonProps[] | - | 操作按钮数组 |
| vertical | boolean | `true` | 按钮是否垂直排列 |
| btnVariant | ButtonProps['variant'] | - | 按钮样式变体 |
| bgColor | string | - | 背景颜色 |
| avatar | string | - | 头像图片地址 |
| onClose | () => void | - | 关闭回调 |
| onBackdropClick | () => void | - | 点击遮罩回调 |
| children | ReactNode | - | 内容 |

## 注意事项

- Modal 会自动挂载到 document.body
- 打开 Modal 时会自动禁止页面滚动
- Confirm 和 Popup 是 Modal 的特殊形式
- Popup 适用于底部弹出的选择菜单
- `backdrop="static"` 时点击遮罩不会关闭弹窗
