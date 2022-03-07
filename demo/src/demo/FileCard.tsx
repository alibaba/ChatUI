import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { FileCard } from '../../../src';

const file = new File(['foo'], 'foo.txt', {
  type: 'text/plain',
});

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <FileCard file={file} />
    </DemoSection>
    <DemoSection title="指定拓展名">
      <FileCard file={file} extension="pdf" />
    </DemoSection>
    <DemoSection title="额外内容">
      <FileCard file={file}>
        <a href="https://chatui.io/">下载</a>
      </FileCard>
    </DemoSection>
  </DemoPage>
);
