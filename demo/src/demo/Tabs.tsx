import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Tabs, Tab } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex2, setTabIndex2] = useState(0);

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Tabs index={tabIndex} onChange={setTabIndex}>
          <Tab label="标签1">
            <p>内容1</p>
          </Tab>
          <Tab label="标签2">
            <p>内容2</p>
          </Tab>
          <Tab label="标签3">
            <p>内容3</p>
          </Tab>
        </Tabs>
      </DemoSection>
      <DemoSection title="自动滚动">
        <Tabs index={tabIndex2} scrollable onChange={setTabIndex2}>
          <Tab label="标签1">
            <p>内容1</p>
          </Tab>
          <Tab label="标签2">
            <p>内容2</p>
          </Tab>
          <Tab label="标签3">
            <p>内容3</p>
          </Tab>
          <Tab label="标签4">
            <p>内容4</p>
          </Tab>
          <Tab label="标签5">
            <p>内容5</p>
          </Tab>
          <Tab label="标签6">
            <p>内容6</p>
          </Tab>
        </Tabs>
      </DemoSection>
    </DemoPage>
  );
};
