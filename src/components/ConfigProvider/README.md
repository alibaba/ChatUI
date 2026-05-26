# ConfigProvider 全局配置组件

ConfigProvider 用于提供全局配置能力，包括多语言切换、主题色设置、适老化模式等功能。

## 代码演示

```jsx
import React from 'react';
import { ConfigProvider } from '@chatui/core';

export default function() {
  return (
    <ConfigProvider
      locale="zh-CN"
      colorScheme="light"
      elderMode={false}
      locales={{
        'zh-CN': {
          // 自定义多语言文案
        }
      }}
    >
      <App />
    </ConfigProvider>
  );
}
```

## Props

### ConfigProviderProps

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| locale | string | 'en-US' | 当前语言 |
| locales | Record<string, any> | - | 多语言配置对象 |
| colorScheme | 'light' \| 'dark' \| 'auto' | - | 主题色模式 |
| elderMode | boolean | false | 是否开启适老化模式 |

## Hooks

### useConfig

获取全局配置。

```jsx
import { useConfig } from '@chatui/core';

const config = useConfig();
// { locale, locales, colorScheme, elderMode }
```

### useLocale

获取组件的多语言文案。

```jsx
import { useLocale } from '@chatui/core';

// 获取组件的多语言文案
const { trans } = useLocale('Button');
const label = trans('submit'); // 获取 Button.submit 的文案

// 传入默认值
const { trans } = useLocale('Search', {
  search: '搜索',
  placeholder: '请输入关键词',
});
```
