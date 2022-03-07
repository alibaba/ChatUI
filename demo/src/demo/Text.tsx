import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Text } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Text>文本内容</Text>
    </DemoSection>
    <DemoSection title="单行显示">
      <Text truncate>这是一段非常非常非常非常非常非常非常非常长的文本内容</Text>
    </DemoSection>
    <DemoSection title="多行显示">
      <Text truncate={2}>
        这是一段非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常长的文本内容
      </Text>
    </DemoSection>
    <DemoSection title="单词换行">
      <Text breakWord>ThisIsVeryVeryVeryVeryVeryVeryVeryLongEnglishWord</Text>
    </DemoSection>
  </DemoPage>
);
