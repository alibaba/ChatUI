# ErrorBoundary 错误边界组件

ErrorBoundary 错误边界组件用于捕获子组件树中的 JavaScript 错误，并展示降级 UI，防止整个应用崩溃。

## 代码演示

```jsx
import React from 'react';
import { ErrorBoundary } from '@chatui/core';

function Fallback({ error, errorInfo }) {
  return (
    <div style={{ padding: 20, background: '#fee', color: '#c00' }}>
      <h3>出错了</h3>
      <p>{error.message}</p>
    </div>
  );
}

export default function() {
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onError={(error, info) => console.error(error, info)}
    >
      <App />
    </ErrorBoundary>
  );
}
```

## Props

### ErrorBoundaryProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| FallbackComponent | React.ComponentType<FallbackProps> | - | 自定义降级组件 |
| onError | (error: Error, info: React.ErrorInfo) => void | - | 错误发生时的回调函数 |
| children | ReactNode | - | 子组件 |

### FallbackProps

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error | Error | 错误对象 |
| errorInfo | React.ErrorInfo | 错误的详细信息 |
