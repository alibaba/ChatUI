# FileCard 文件卡片组件

FileCard 文件卡片组件用于展示文件信息，包括文件名、文件大小、文件类型等。

## 代码演示

```jsx
import React from 'react';
import { FileCard } from '@chatui/core';

export default function() {
  const file = new File(['content'], 'document.pdf', { type: 'application/pdf' });

  return (
    <FileCard file={file}>
      <span style={{ color: '#999' }}>PDF 文档</span>
    </FileCard>
  );
}
```

## Props

### FileCardProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| file | File | - | 文件对象 |
| extension | string | - | 文件扩展名，不传则自动从文件名获取 |
| children | ReactNode | - | 子元素，用于添加额外信息 |
