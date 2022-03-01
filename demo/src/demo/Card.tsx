import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, CardMedia, CardTitle, CardText, CardActions, Button } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Card size="xl">
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions>
          <Button size="lg">前去留言</Button>
          <Button color="primary" size="lg">
            提交评价
          </Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="卡片尺寸">
      <div className="demo-row">
        <Card size="xs">
          <CardText>xs</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="sm">
          <CardText>sm</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="md">
          <CardText>md</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="lg">
          <CardText>lg</CardText>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="xl">
          <CardText>xl</CardText>
        </Card>
      </div>
    </DemoSection>
    <DemoSection title="自适应宽度">
      <div className="demo-row">
        <Card fluid>
          <CardText>fluid</CardText>
        </Card>
      </div>
    </DemoSection>
    <DemoSection title="按钮竖排">
      <Card size="xl">
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions direction="column">
          <Button color="primary">强按钮</Button>
          <Button>弱按钮</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="按钮禁用">
      <Card size="xl">
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions direction="column">
          <Button color="primary" disabled>
            强按钮
          </Button>
          <Button disabled>弱按钮</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="卡片媒体">
      <div className="demo-row">
        <Card size="xl">
          <CardMedia image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg" />
          <CardTitle>aspectRatio: square</CardTitle>
        </Card>
      </div>
      <div className="demo-row">
        <Card size="xl">
          <CardMedia
            aspectRatio="wide"
            image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
          />
          <CardTitle>aspectRatio: wide</CardTitle>
        </Card>
      </div>
    </DemoSection>
  </DemoPage>
);
