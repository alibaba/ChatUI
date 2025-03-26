import React from 'react';
import { DemoPage, DemoSection } from '../components';
import {
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardContent,
  CardText,
  CardActions,
  Button,
  Icon,
} from '../../../src';

const title = '主标题';
const titleL =
  '主标题文字最多2行超出省略，主标题文字最多2行超出省略，主标题文字最多2行超出省略，主标题文字最多2行超出省略';
const subtitleL = '副标题文字最多1行超出省略，副标题文字最多1行超出省略';

export default () => (
  <DemoPage>
    <DemoSection title="CardHeader">
      <Card size="xl">
        <CardHeader title={title} />
      </Card>
      <Card size="xl">
        <CardHeader title={titleL} />
      </Card>
      <Card size="xl">
        <CardHeader icon="check-circle-fill" iconColor="#62D957" title={title} />
      </Card>
      <Card size="xl">
        <CardHeader
          icon="https://gw.alicdn.com/imgextra/i1/O1CN01HgOdlz1smZZE6MzKH_!!6000000005809-2-tps-194-194.png"
          title={title}
        />
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
      </Card>
      <Card size="xl">
        <CardHeader icon="check-circle-fill" iconColor="#62D957" title={titleL} />
      </Card>
      <Card size="xl">
        <CardHeader title={title} desc={subtitleL}>
          <span>已使用</span>
        </CardHeader>
      </Card>
      <Card size="xl">
        <CardHeader icon="message" iconColor="#FF5000" title="专属客服 衢小文 回复了您" />
      </Card>
      <Card size="xl">
        <CardHeader icon="bullhorn" iconColor="#FF5000" title="主标题/标识">
          <span>动态文本</span>
        </CardHeader>
      </Card>
      <Card size="xl">
        <CardHeader icon="bullhorn" iconColor="#FF5000" title="主标题/标识">
          <a href="#1">
            <span>文字链</span>
            <Icon type="chevron-right" />
          </a>
        </CardHeader>
      </Card>
      <Card size="xl">
        <CardHeader icon="bullhorn" iconColor="#FF5000" title="主标题/标识">
          <Button size="sm" color="primary">
            按钮
          </Button>
        </CardHeader>
      </Card>
      <Card size="xl">
        <CardHeader
          icon="check-circle-fill"
          iconColor="#62D957"
          title="价保成功"
          desc="为您节省 5.03元"
          style={{ background: 'linear-gradient(90deg, #FCF8EC 56%, #FFEFBF 100%)' }}
          hasBg
          badge="https://gw.alicdn.com/imgextra/i1/O1CN01vgMc3K1H2BjChaZbg_!!6000000000699-2-tps-180-96.png"
        />
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
      </Card>
      <Card size="xl">
        <CardHeader
          logo="https://gw.alicdn.com/imgextra/i3/O1CN01sTOmho1gmK0u1HgJR_!!6000000004184-2-tps-369-90.png"
          style={{ background: 'linear-gradient(90deg, #FCF8EC 56%, #FFEFBF 100%)' }}
          hasBg
          badge="https://gw.alicdn.com/imgextra/i4/O1CN01Y3TOS91FxJtv7qiEi_!!6000000000553-2-tps-360-334.png"
        />
        <CardActions>
          <Button>Default button</Button>
          <Button color="primary">Primary button</Button>
        </CardActions>
      </Card>
    </DemoSection>
    <DemoSection title="基础用法">
      <Card size="xl">
        <CardMedia image="//gw.alicdn.com/tfs/TB1Xv5_vlr0gK0jSZFnXXbRRXXa-427-240.png" />
        <CardTitle subtitle="subtitle">Card title</CardTitle>
        <CardText>Card content</CardText>
        <CardContent>Card content</CardContent>
        <CardActions>
          <Button>Default button</Button>
          <Button color="primary">Primary button</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardMedia
          aspectRatio="wide"
          image="//gw.alicdn.com/tfs/TB1pLWVTAT2gK0jSZFkXXcIQFXa-620-320.jpg"
        />
        <CardTitle>我的标题我的标题我的标题我的标题</CardTitle>
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions>
          <Button>前去留言</Button>
          <Button color="primary">提交评价</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardTitle>我的标题我的标题我的标题我的标题</CardTitle>
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions>
          <Button>前去留言</Button>
          <Button color="primary">提交评价</Button>
        </CardActions>
      </Card>
      <Card fluid>
        <CardText>
          气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情气泡内容详情
        </CardText>
        <CardActions>
          <Button>前去留言</Button>
          <Button color="primary">提交评价</Button>
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
      <div className="demo-row">
        <Card fluid="order">
          <CardText>fluid=order</CardText>
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
