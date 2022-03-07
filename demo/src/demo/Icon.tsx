import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Icon } from '../../../src';

const symbols = document.getElementById('__CHATUI_ICONS__')?.querySelectorAll('symbol') || [];

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Icon type="bullhorn" />
    </DemoSection>
    <DemoSection title="旋转动画">
      <Icon type="spinner" spin />
    </DemoSection>
    <DemoSection title="旋转动画">
      <div className="icon-list">
        {Array.from(symbols).map((item) => {
          const icon = item.id.replace('icon-', '');
          return (
            <div className="icon-box" key={icon}>
              <Icon type={icon} />
              <span>{icon}</span>
            </div>
          );
        })}
      </div>
    </DemoSection>
  </DemoPage>
);
