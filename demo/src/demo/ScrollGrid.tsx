import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { ScrollGrid } from '../../../src';

export default () => {
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <ScrollGrid>
          {Array.from({ length: 6 }).map((t, i) => (
            <div
              style={{
                width: 'calc(33.33% - 24px)',
                height: '70px',
                margin: '12px',
                background: 'var(--color-fill-2)',
              }}
              key={i}
            >
              {i}
            </div>
          ))}
        </ScrollGrid>
      </DemoSection>
      <DemoSection title="多行显示">
        <ScrollGrid wrap>
          {Array.from({ length: 6 }).map((t, i) => (
            <div
              style={{
                width: 'calc(33.33% - 24px)',
                height: '70px',
                margin: '12px',
                background: 'var(--color-fill-2)',
              }}
              key={i}
            >
              {i}
            </div>
          ))}
        </ScrollGrid>
      </DemoSection>
    </DemoPage>
  );
};
