# Popover 气泡弹出框组件

Popover 组件用于在目标元素附近显示弹出内容，常用于提示信息或快捷操作。

## 使用场景

- 悬浮提示
- 快捷菜单
- 额外信息展示
- 操作确认
- 辅助说明

## 代码演示

```jsx
import React, { useState, useRef } from 'react';
import { Popover, Button } from '@chatui/core';

export default function() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  return (
    <div>
      <h3>基础用法</h3>
      <Button
        ref={buttonRef}
        onClick={() => setVisible(!visible)}
      >
        点击显示 Popover
      </Button>

      {buttonRef.current && (
        <Popover
          active={visible}
          target={buttonRef.current}
          onClose={() => setVisible(false)}
        >
          <div style={{ padding: 12 }}>
            <p>这是 Popover 的内容</p>
            <Button size="sm" onClick={() => setVisible(false)}>
              关闭
            </Button>
          </div>
        </Popover>
      )}

      <h3>菜单示例</h3>
      <Button
        ref={buttonRef}
        onClick={() => setVisible(!visible)}
      >
        打开菜单
      </Button>

      {buttonRef.current && (
        <Popover
          active={visible}
          target={buttonRef.current}
          onClose={() => setVisible(false)}
        >
          <div className="menu">
            <div className="menu-item" onClick={() => {
              console.log('编辑');
              setVisible(false);
            }}>编辑</div>
            <div className="menu-item" onClick={() => {
              console.log('删除');
              setVisible(false);
            }}>删除</div>
            <div className="menu-item" onClick={() => {
              console.log('分享');
              setVisible(false);
            }}>分享</div>
          </div>
        </Popover>
      )}
    </div>
  );
}
```

## Props

### PopoverProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| active | boolean | - | 是否显示（必填） |
| target | HTMLElement | - | 目标元素（必填） |
| onClose | () => void | - | 关闭回调（必填） |
| children | ReactNode | - | 弹出内容 |

## 注意事项

- Popover 会自动挂载到 document.body
- 点击 Popover 外部区域会自动关闭
- Popover 会自动定位在目标元素上方
- 包含箭头指示器指向目标元素
- 窗口大小改变时会自动重新定位
