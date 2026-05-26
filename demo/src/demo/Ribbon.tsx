import { DemoPage, DemoSection } from '../components';
import { Ribbon, Card } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon>居左角标</Ribbon>
      </Card>
    </DemoSection>

    <DemoSection title="不同位置" bg="gray">
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon>居左角标</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon position="center">居中角标</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon position="right">居右角标</Ribbon>
      </Card>
    </DemoSection>

    <DemoSection title="不同尺寸" bg="gray">
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon size="sm">居左角标</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon size="sm" position="right">
          居右角标
        </Ribbon>
      </Card>
    </DemoSection>

    <DemoSection title="不同颜色" bg="gray">
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon color="primary">猜你想问</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon color="gray" position="right">已使用</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon color="yellow">加抵金</Ribbon>
      </Card>
      <br />
      <Card style={{ position: 'relative', width: '160px', height: '80px' }}>
        <Ribbon color="yellow" position="right">限时优惠</Ribbon>
      </Card>
    </DemoSection>
  </DemoPage>
);