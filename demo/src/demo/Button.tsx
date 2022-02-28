import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Button, IconButton } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="按钮颜色">
      <Button color="primary">主要按钮</Button>
      <Button>默认按钮</Button>
    </DemoSection>
    <DemoSection title="禁用状态">
      <Button color="primary" disabled>
        主要按钮
      </Button>
      <Button disabled>默认按钮</Button>
    </DemoSection>
    <DemoSection title="加载状态">
      <Button color="primary" loading>
        主要按钮
      </Button>
      <Button loading>默认按钮</Button>
    </DemoSection>
    <DemoSection title="图标">
      <Button color="primary" icon="search">
        主要按钮
      </Button>
      <Button icon="search">默认按钮</Button>
    </DemoSection>
    <DemoSection title="按钮尺寸">
      <div className="demo-row">
        <Button color="primary" size="sm">
          小号按钮
        </Button>
        <Button color="primary">普通按钮</Button>
        <Button color="primary" size="lg">
          大号按钮
        </Button>
        <Button color="primary" size="xl">
          特大号按钮
        </Button>
      </div>
      <div>
        <Button size="sm">小号按钮</Button>
        <Button>普通按钮</Button>
        <Button size="lg">大号按钮</Button>
        <Button size="xl">特大号按钮</Button>
      </div>
    </DemoSection>
    <DemoSection title="按钮变体">
      <Button variant="outline" color="primary">
        outline variant
      </Button>
      <Button variant="text">text variant</Button>
    </DemoSection>
    <DemoSection title="图标按钮">
      <IconButton icon="image" />
      <IconButton icon="volume-circle" />
      <IconButton icon="plus-circle" size="lg" />
    </DemoSection>
    <DemoSection title="块级元素">
      <div className="demo-row">
        <Button color="primary" block>
          块级元素
        </Button>
      </div>
      <Button block>块级元素</Button>
    </DemoSection>
  </DemoPage>
);
