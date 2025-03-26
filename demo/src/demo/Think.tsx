import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Think } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Think>
        <p>好的，用户发来“你好”，我需要回应。首先，保持友好，用中文回复。</p>
      </Think>
    </DemoSection>
    <DemoSection title="思考完成">
      <Think isDone thinkTime={123}>
        <p>好的，用户发来“你好”，我需要回应。首先，保持友好，用中文回复。然后按照之前设定的角色，表现出有性格和脾气，可能带点俏皮或幽默。还要推动情节发展，比如引入新情景或事件。同时，注意口语化，避免太正式。</p>
      </Think>
    </DemoSection>
  </DemoPage>
);
