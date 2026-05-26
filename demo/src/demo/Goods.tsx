import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, Goods, Button, CardTitle, CardContent } from '../../../src';
import { ConfigProvider } from '../../../src/components/ConfigProvider';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <Card size="xl">
        <Goods
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="这个商品名称非常非常长长到会换行"
          desc="商品描述"
          tags={[{ name: '3个月免息' }, { name: '4.1折' }, { name: '黑卡再省33.96' }]}
          currency="¥"
          price={849}
          originalPrice={1999}
          meta="7人付款"
          count={6}
          unit="kg"
          action={{
            // icon: 'cart',
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
      </Card>
    </DemoSection>
    <DemoSection title="订单（标题+描述+状态）" bg="gray">
      <Card size="xl">
        <Goods
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="商题商品标商品标商品标..."
          desc="2025-10-23 14:37 寄出"
          status="待支付"
          currency="¥"
          price={999.99}
          caption="共9件"
        >
          <div className="Order-actions" style={{ textAlign: 'right' }}>
            <Button color="primary" size="sm">
              发送
            </Button>
          </div>
        </Goods>
      </Card>
    </DemoSection>
    <DemoSection title="订单（标题+描述+状态）" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          desc="颜色分类：棕色；42码"
          currency="¥"
          price={30000.04}
          status="待卖家提供退货地址"
          count={1}
        />
      </Card>
    </DemoSection>
    <DemoSection title="订单（标题+状态）" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          currency="¥"
          price={30000.04}
          status="交易关闭"
          count={1}
        />
      </Card>
    </DemoSection>
    <DemoSection title="订单（标题+描述）" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题"
          desc="规格信息规格信息规格信息规格信息规格信息规格信息规格信息规格信息规格信息"
          currency="¥"
          price={999.99}
          count={1}
        />
      </Card>
    </DemoSection>
    <DemoSection title="渲染 children" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          desc="颜色分类：棕色；42码"
          currency="¥"
          price={30000.04}
          count={1}
        >
          <div>最晚 12月22日 22:22 发货 </div>
        </Goods>
      </Card>
    </DemoSection>
    <DemoSection title="渲染 asideContent" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          desc="颜色分类：棕色；42码"
          currency="¥"
          price={30000.04}
          status="交易关闭"
          asideContent={<div>asideContent</div>}
        />
      </Card>
    </DemoSection>
    <DemoSection title="订单列表" bg="gray">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="商品名称"
          desc="商品描述"
          tags={[{ name: '3个月免息' }, { name: '4.1折' }]}
          currency="¥"
          price={300.0}
          count={8}
          status="交易关闭"
          variant="inList"
        >
          <div className="Order-actions" style={{ textAlign: 'right' }}>
            <Button color="primary" size="sm">
              发送
            </Button>
          </div>
        </Goods>
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="这个商品名称非常非常长长到会换行"
          desc="商品描述"
          tags={[{ name: '3个月免息' }, { name: '4.1折' }, { name: '黑卡再省33.96' }]}
          currency="$"
          price={300.0}
          count={8}
          variant="inList"
        >
          <div className="Order-actions" style={{ textAlign: 'right' }}>
            <Button color="primary" size="sm">
              发送
            </Button>
          </div>
        </Goods>
      </Card>
    </DemoSection>
    <DemoSection title="待支付运费" bg="gray">
      <Card fluid>
        <CardTitle>您有5笔历史运费待支付</CardTitle>
        <CardContent>
          <Goods
            type="order"
            img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
            caption="共9件"
            name="圆通快递"
            desc="2025-10-23 14:37 寄出"
            variant="inList"
            elderMode
          >
            <div className="Order-actions">
              <span>待支付¥300.0</span>
              <Button color="primary" size="sm">
                去支付
              </Button>
            </div>
          </Goods>
          <Goods
            type="order"
            img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
            caption="共9件"
            name="圆通快递"
            desc="2025-10-23 14:37 寄出"
            status="待支付¥300.0"
            variant="inList"
            elderMode
          >
            <div className="Order-actions" style={{ textAlign: 'right' }}>
              <Button color="primary" size="sm">
                去支付
              </Button>
            </div>
          </Goods>
        </CardContent>
      </Card>
    </DemoSection>
    <DemoSection title="小尺寸">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          currency="¥"
          price={999.99}
          count={1}
          variant="compact"
        />
      </Card>
    </DemoSection>
    <DemoSection title="适老化（props）" bg="gray">
      <Card>
        <Goods
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="这个商品名称非常非常长长到会换行"
          desc="商品描述 非常非常长长到会换行非常非常长长到会换行非常非常长长到会换行"
          tags={[{ name: '3个月免息' }, { name: '4.1折' }, { name: '黑卡再省33.96' }]}
          currency="¥"
          price={849}
          originalPrice={1999}
          meta="7人付款"
          count={6}
          unit="kg"
          elderMode
          action={{
            icon: 'cart',
            onClick(e) {
              console.log(e);
            },
          }}
        />
      </Card>
    </DemoSection>
    <DemoSection title="适老化（ConfigProvider）" bg="gray">
      <ConfigProvider elderMode>
        <Card>
          <Goods
            type="order"
            img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
            name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
            desc="颜色分类：棕色；42码"
            currency="¥"
            price={30000.04}
            status="交易关闭"
            count={1}
          />
        </Card>
      </ConfigProvider>
    </DemoSection>
  </DemoPage>
);
