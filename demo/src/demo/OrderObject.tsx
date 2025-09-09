import { DemoPage, DemoSection } from '../components';
import { Card, OrderObject } from '../../../src';

const orderList = [
  {
    img: 'https://gw.alicdn.com/imgextra/i3/O1CN01NpwFUP1YMf3tWAYOu_!!6000000003045-55-tps-72-72.svg',
    name: 'Air Joden2019限定倒勾棕色高帮篮球鞋最多字…',
    currency: '¥',
    price: 999.99,
    count: 1,
  },
  {
    img: 'https://gw.alicdn.com/imgextra/i3/O1CN01KqcC9j1tZ7lkyTRzj_!!6000000005915-55-tps-72-72.svg',
    name: 'Air Joden2019限定倒勾棕色高帮篮球鞋最多字…',
    currency: '¥',
    price: 999.99,
    count: 1,
  },
  {
    img: 'https://gw.alicdn.com/imgextra/i1/O1CN01mD6Fgk23IlmYbZuxo_!!6000000007233-55-tps-72-72.svg',
    name: 'Air Joden2019限定倒勾棕色高帮篮球鞋最多字…',
    currency: '¥',
    price: 999.99,
    count: 1,
  },
  {
    img: 'https://gw.alicdn.com/imgextra/i3/O1CN019QHMQv28fjivIKEOv_!!6000000007960-55-tps-72-72.svg',
    name: 'Air Joden2019限定倒勾棕色高帮篮球鞋最多字…',
    currency: '¥',
    price: 999.99,
    count: 1,
  },
];

export default () => (
  <DemoPage>
    <DemoSection title="一主多子订单+商品信息">
      <Card size="xl">
        <OrderObject title="圆通速递 YT7563405663673" list={orderList} count={99} />
      </Card>
    </DemoSection>
    <DemoSection title="一主多子订单-3个商品">
      <Card size="xl">
        <OrderObject title="圆通速递 YT7563405663673" list={orderList.slice(0, 3)} />
      </Card>
    </DemoSection>
    <DemoSection title="一主多子订单-2个商品">
      <Card size="xl">
        <OrderObject list={orderList.slice(0, 2)} />
      </Card>
    </DemoSection>
    <DemoSection title="一主一子订单">
      <Card size="xl">
        <OrderObject title="圆通速递 YT7563405663673" list={orderList.slice(0, 1)} />
      </Card>
    </DemoSection>
  </DemoPage>
);
