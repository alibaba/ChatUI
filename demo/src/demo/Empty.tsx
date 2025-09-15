import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Empty, Button } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Empty tip="暂无数据" />
    </DemoSection>
    <DemoSection title="定制内容">
      <Empty type="error" tip="oops..加载失败，点击重试">
        <Button color="primary">刷新</Button>
      </Empty>
    </DemoSection>
    <DemoSection title="搜索为空">
      <Empty tip="搜索为空" desc="仅为您展示最近30天内付款付款交易成功的天猫/淘宝实物订单" />
    </DemoSection>
    <DemoSection title="抱歉~系统开小差了">
      <Empty type="error" tip="抱歉~系统开小差了" desc="您可以尝试刷新页面">
        <Button color="primary">刷新</Button>
      </Empty>
    </DemoSection>
  </DemoPage>
);
