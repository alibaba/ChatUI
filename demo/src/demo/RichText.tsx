import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { RichText } from '../../../src';

const html = '<div><h1>H1标题</h1><p>这是段落<em>em标签</em><strong>strong标签</strong></p></div>';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <RichText content={html} />
    </DemoSection>
  </DemoPage>
);
