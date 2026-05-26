# Toast 轻提示组件

Toast 组件用于显示轻量级的提示信息，会在一定时间后自动消失。

## 使用场景

- 操作反馈
- 加载提示
- 成功提示
- 错误提示
- 临时通知

## 代码演示

```jsx
import React from 'react';
import { toast, Button } from '@chatui/core';

export default function() {
  return (
    <div>
      <h3>基础用法</h3>
      <Button onClick={() => toast.show('这是一条提示消息')}>
        显示 Toast
      </Button>

      <h3>成功提示</h3>
      <Button onClick={() => toast.success('操作成功')}>
        成功提示
      </Button>

      <h3>失败提示</h3>
      <Button onClick={() => toast.fail('操作失败')}>
        失败提示
      </Button>

      <h3>加载提示</h3>
      <Button onClick={() => toast.loading('加载中...')}>
        加载提示
      </Button>

      <h3>自定义持续时间</h3>
      <Button onClick={() => toast.show('3秒后消失', undefined, 3000)}>
        3秒提示
      </Button>

      <h3>持续显示</h3>
      <Button onClick={() => toast.loading('请等待...', -1)}>
        持续显示（需手动关闭）
      </Button>
    </div>
  );
}
```

## API

### toast.show(content, type?, duration?)

显示 Toast 提示

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 提示内容 |
| type | `'success' \| 'error' \| 'loading'` | - | 提示类型 |
| duration | number | `2000` | 持续时间（毫秒），设为 -1 则不自动关闭 |

### toast.success(content, duration?)

显示成功提示

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 提示内容 |
| duration | number | `2000` | 持续时间（毫秒） |

### toast.fail(content, duration?)

显示失败提示

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 提示内容 |
| duration | number | `2000` | 持续时间（毫秒） |

### toast.loading(content, duration?)

显示加载提示

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | string | - | 提示内容 |
| duration | number | `2000` | 持续时间（毫秒） |

## ToastProps

如果直接使用 Toast 组件：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| content | ReactNode | - | 提示内容 |
| type | `'success' \| 'error' \| 'loading'` | - | 提示类型 |
| duration | number | `2000` | 持续时间（毫秒），设为 -1 则不自动关闭 |
| onUnmount | () => void | - | 卸载时的回调 |

## 注意事项

- Toast 会自动挂载到 document.body
- 同时只会显示一个 Toast
- 后调用的 Toast 会替换前一个
- 适合显示简短的提示信息，不建议内容过长
