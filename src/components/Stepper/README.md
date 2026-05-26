# Stepper 步骤条组件

Stepper 组件用于展示任务的进度，引导用户按照流程完成任务。

## 使用场景

- 多步骤表单
- 任务进度展示
- 操作流程引导
- 订单状态跟踪
- 教程步骤

## 代码演示

```jsx
import React, { useState } from 'react';
import { Stepper, Step } from '@chatui/core';

export default function() {
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <h3>基础用法</h3>
      <Stepper current={current}>
        <Step title="第一步" desc="填写基本信息" />
        <Step title="第二步" desc="确认订单信息" />
        <Step title="第三步" desc="支付" />
        <Step title="完成" />
      </Stepper>

      <h3>带副标题</h3>
      <Stepper current={1}>
        <Step title="提交申请" subTitle="2024-01-01 10:00" />
        <Step title="审核中" subTitle="预计需要1-2天" />
        <Step title="审核通过" />
      </Stepper>

      <h3>步骤状态</h3>
      <Stepper current={1} status="success">
        <Step title="已完成" />
        <Step title="进行中" />
        <Step title="待处理" />
      </Stepper>

      <Stepper current={1} status="fail">
        <Step title="已完成" />
        <Step title="失败" desc="审核未通过" />
        <Step title="待处理" />
      </Stepper>

      <h3>反向步骤</h3>
      <Stepper current={1} inverted>
        <Step title="第一步" />
        <Step title="第二步" />
        <Step title="第三步" />
      </Stepper>

      <h3>自定义内容</h3>
      <Stepper current={current}>
        <Step title="创建订单">
          <div style={{ marginTop: 8 }}>
            订单号: 20240101001
          </div>
        </Step>
        <Step title="支付订单">
          <div style={{ marginTop: 8 }}>
            支付金额: ¥100.00
          </div>
        </Step>
        <Step title="订单完成" />
      </Stepper>
    </div>
  );
}
```

## Props

### StepperProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| current | number | `0` | 当前步骤的索引 |
| status | `'success' \| 'fail' \| 'abort'` | - | 当前步骤的状态 |
| inverted | boolean | `false` | 是否反向显示（未完成的步骤显示为已完成） |
| children | ReactNode | - | Step 组件 |

### StepProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| className | string | - | 自定义类名 |
| title | string | - | 步骤标题 |
| subTitle | string | - | 步骤副标题 |
| desc | ReactNode | - | 步骤描述 |
| children | ReactNode | - | 自定义内容 |

## 状态说明

| 状态 | 说明 | 图标 |
| --- | --- | --- |
| `success` | 成功完成 | 绿色对勾 |
| `fail` | 失败 | 红色警告 |
| `abort` | 中止 | 灰色横线 |

## 注意事项

- Step 组件必须作为 Stepper 的直接子元素
- `current` 从 0 开始计数
- `inverted` 模式适用于倒计时或倒序流程
- 步骤状态会自动根据 `current` 值计算（已完成、进行中、待处理）
