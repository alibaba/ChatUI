import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Progress, Button } from '../../../src';

export default () => {
  const [percentage, setPercentage] = useState(20);
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Progress value={percentage} />
        <br />
        <Button onClick={() => setPercentage(percentage - 10)}>减少</Button>
        <Button onClick={() => setPercentage(percentage + 10)} color="primary">
          增加
        </Button>
      </DemoSection>
      <DemoSection title="状态显示: active">
        <Progress value={30} status="active" />
      </DemoSection>
      <DemoSection title="状态显示: success">
        <Progress value={40} status="success" />
      </DemoSection>
      <DemoSection title="状态显示: error">
        <Progress value={50} status="error" />
      </DemoSection>
    </DemoPage>
  );
};
