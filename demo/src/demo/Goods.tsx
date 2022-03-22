import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, Goods } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
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
    <DemoSection title="订单">
      <Card size="xl">
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
    </DemoSection>
    <DemoSection title="渲染 children">
      <Card size="xl">
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="Air Joden2019限定倒勾棕色高帮篮球鞋最多字…"
          desc="颜色分类：棕色；42码"
          currency="¥"
          price={30000.04}
          status="交易关闭"
          count={1}
          onClick={() => {
            console.log(111);
          }}
        >
          <div>children content</div>
        </Goods>
      </Card>
    </DemoSection>
    <DemoSection title="订单列表">
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
          unit="kg"
          status="交易关闭"
          action={{
            label: '详情',
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
        <Goods
          type="order"
          img="//gw.alicdn.com/tfs/TB1p_nirYr1gK0jSZR0XXbP8XXa-300-300.png"
          name="这个商品名称非常非常长长到会换行"
          desc="商品描述"
          tags={[{ name: '3个月免息' }, { name: '4.1折' }, { name: '黑卡再省33.96' }]}
          currency="$"
          price={300.0}
          count={8}
          unit="kg"
          action={{
            label: '详情',
            onClick(e) {
              console.log(e);
              e.stopPropagation();
            },
          }}
        />
      </Card>
    </DemoSection>
  </DemoPage>
);
