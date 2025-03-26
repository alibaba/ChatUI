import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Navbar } from '../../../src';

export default () => {
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Navbar title="客服小蜜" />
      </DemoSection>
      <DemoSection title="返回上级">
        <Navbar title="客服小蜜" leftContent={{ icon: 'chevron-left' }} />
      </DemoSection>
      <DemoSection title="右侧按钮">
        <Navbar title="客服小蜜" rightContent={[{ icon: 'apps' }, { icon: 'ellipsis-h' }]} />
      </DemoSection>
      <DemoSection title="logo">
        <Navbar
          title="客服小蜜"
          logo="//gw.alicdn.com/imgextra/i4/O1CN016i66TT24lRwUecIk5_!!6000000007431-2-tps-164-164.png_80x80.jpg"
          leftContent={{ icon: 'chevron-left' }}
          rightContent={[{ icon: 'apps' }, { icon: 'ellipsis-h' }]}
        />
      </DemoSection>
      <DemoSection title="左对齐: title">
        <Navbar
          title="智能客服小蜜"
          leftContent={{ icon: 'chevron-left' }}
          align="left"
        />
      </DemoSection>
      <DemoSection title="左对齐: logo + title">
        <Navbar
          logo="//gw.alicdn.com/imgextra/i4/O1CN016i66TT24lRwUecIk5_!!6000000007431-2-tps-164-164.png_80x80.jpg"
          title="智能客服小蜜"
          leftContent={{ icon: 'chevron-left' }}
          align="left"
        />
      </DemoSection>
      <DemoSection title="左对齐: logo + title + desc">
        <Navbar
          logo="//gw.alicdn.com/imgextra/i4/O1CN016i66TT24lRwUecIk5_!!6000000007431-2-tps-164-164.png_80x80.jpg"
          title="智能客服小蜜"
          desc="客服热线 9510211 (7:00-次日1:00)"
          leftContent={{ icon: 'chevron-left' }}
          align="left"
        />
      </DemoSection>
    </DemoPage>
  );
};
