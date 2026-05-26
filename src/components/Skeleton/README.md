# Skeleton 骨架屏组件

Skeleton 组件用于在内容加载前显示占位效果，提升用户体验。

## 使用场景

- 内容加载占位
- 列表加载状态
- 卡片加载效果
- 文章加载
- 图片加载占位

## 代码演示

```jsx
import React, { useState, useEffect } from 'react';
import { Skeleton, Card } from '@chatui/core';

export default function() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      <h3>基础用法</h3>
      {loading ? (
        <Skeleton />
      ) : (
        <div>内容已加载</div>
      )}

      <h3>多行骨架</h3>
      <Skeleton rows={3} />

      <h3>带头像</h3>
      <Skeleton avatar />

      <h3>卡片骨架</h3>
      <Card>
        <Skeleton avatar rows={2} />
      </Card>
    </div>
  );
}
```

## Props

### SkeletonProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| rows | number | `1` | 显示行数 |
| avatar | boolean | `false` | 是否显示头像占位 |
| active | boolean | `false` | 是否显示动画效果 |

## 注意事项

- Skeleton 适合在数据加载前使用
- 通过 rows 控制占位行数
- avatar 会在左侧显示圆形头像占位
- active 启用后会有闪烁动画效果
