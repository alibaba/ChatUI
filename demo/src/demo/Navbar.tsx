import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Navbar } from '../../../src';
import '../../../src/styles/index.less';

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
      <DemoSection title="LOGO">
        <Navbar
          title="客服小蜜"
          logo="//alime-base.oss-cn-beijing.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1636689421751-小蜜头像.png"
          leftContent={{ icon: 'chevron-left' }}
          rightContent={[{ icon: 'apps' }, { icon: 'ellipsis-h' }]}
        />
      </DemoSection>
    </DemoPage>
  );
};
