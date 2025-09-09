import { DemoPage, DemoSection } from '../components';
import { KvList, KvItem, ImageList, Price } from '../../../src';

const imgList = [
  {
    src: 'https://gw.alicdn.com/imgextra/i4/O1CN01L85mBd1u09AfWWZzc_!!6000000005974-0-tps-750-650.jpg',
  },
  {
    src: 'https://gw.alicdn.com/imgextra/i1/O1CN01Zg9NxD1Rjpn6te6nC_!!6000000002148-2-tps-144-144.png',
  },
  {
    src: 'https://gw.alicdn.com/imgextra/i3/O1CN01NHyUNA1VgPI1QtGWA_!!6000000002682-55-tps-46-46.svg',
  },
  {
    src: 'https://gw.alicdn.com/imgextra/i1/O1CN01ArrhnX1E4X4KOlhha_!!6000000000298-55-tps-63-25.svg',
  },
  {
    src: 'https://gw.alicdn.com/imgextra/i4/O1CN01L37qd91eR8dq7hVJp_!!6000000003867-0-tps-1125-2436.jpg',
  },
];

export default () => (
  <DemoPage>
    <DemoSection title="左对齐条目" bg="gray">
      <KvList>
        <KvItem title="一级标题">文案文案文案</KvItem>
        <KvItem title="一级标题">文案文案文案文案文案文案文案文案文案文案文案文案</KvItem>
        <KvItem title="一级标题" onClick={() => {}}>
          文案文案文案文案文案文案文案文案文案文案文案文案
        </KvItem>
        <KvItem title="一级标题" desc="补充描述展示支持一行文案">
          文案文案文案文案文案文案文案文案文案文案文案文案
        </KvItem>
        <KvItem title="图片展示">
          <ImageList list={imgList} />
        </KvItem>
        <KvItem title="图文混排">
          <p>支持多行展示文案文案文案文案文案文案</p>
          <ImageList list={imgList} />
        </KvItem>
      </KvList>
    </DemoSection>
    <DemoSection title="右对齐条目" bg="gray">
      <KvList align="right">
        <KvItem title="一级标题" highlight>
          <Price price={9.09} currency="¥"></Price>
        </KvItem>
        <KvItem title="一级标题">
          <Price price={9.09} currency="¥"></Price>
        </KvItem>
        <KvItem title="二级标题" level={2} desc="补充描述信息展示文案文案" onClick={() => {}}>
          <Price price={9.09} currency="¥"></Price>
        </KvItem>
        <KvItem title="二级标题" level={2} desc="补充描述信息展示文案文案" onClick={() => {}}>
          <Price price={9.09} currency="¥"></Price>
        </KvItem>
        <KvItem title="二级标题" level={2}>
          2种
        </KvItem>
      </KvList>
    </DemoSection>
  </DemoPage>
);
