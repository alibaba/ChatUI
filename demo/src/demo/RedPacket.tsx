import { DemoPage, DemoSection } from '../components';
import { RedPacket } from '../../../src';

const getTodayEndTimestamp = (): number => {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date.getTime();
};

const endTs = getTodayEndTimestamp();

export default () => (
  <DemoPage>
    <DemoSection title="列表红包" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        tag="猜你想问"
        inList
        btnText="选择"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表红包：未失效 有效期≤24小时" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="nearExpired"
        inList
        btnText="选择"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表红包：失效-已使用" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="used"
        inList
        btnText="选择"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表红包：失效-已过期" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="expired"
        inList
        btnText="选择"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <hr />
    <DemoSection title="单红包：未失效 有效期＞24小时" bg="gray">
      <RedPacket
        value={2.22}
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单红包：未失效 有效期≤24小时 标签状态" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="nearExpired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单红包：未失效 有效期≤24小时 倒计时" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="nearExpired"
        showCountdown="auto"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单红包：失效-已使用" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="used"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单红包：失效-已过期" bg="gray">
      <RedPacket
        value={2.22}
        condition="满10元可用"
        name="红包标题"
        endAt={endTs}
        desc="使用规则限淘宝天猫实物商品"
        status="expired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <hr />
    <DemoSection title="列表现金：2行（当前用于赔付现金）" bg="gray">
      <RedPacket
        value={2.22}
        name="现金到账"
        desc="已转账到支付宝余额"
        inList
        variant="cash"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="卡片现金：2行（当前用于赔付现金）" bg="gray">
      <RedPacket
        value={2.22}
        name="现金到账"
        desc="已转账到支付宝余额"
        variant="cash"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="卡片现金：3行-默认（当前用于礼金券）" bg="gray">
      <RedPacket
        value={2.22}
        name="礼金券标题"
        endAt={endTs}
        desc="指定淘宝天猫实物商指定淘宝天猫实物商"
        variant="cash"
        btnText="去使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="卡片现金：倒计时（当前用于礼金券）" bg="gray">
      <RedPacket
        value={2.22}
        name="礼金券标题"
        endAt={endTs}
        showCountdown="auto"
        desc="指定淘宝天猫实物商指定淘宝天猫实物商"
        variant="cash"
        btnText="去使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="卡片现金：3行-失效-已使用（当前用于赔付现金）" bg="gray">
      <RedPacket
        value={2.22}
        name="礼金券标题"
        endAt={endTs}
        desc="限淘宝天猫实物商品限淘宝天猫实物商品"
        variant="cash"
        status="used"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="卡片现金：3行-失效-已过期（当前用于赔付现金）" bg="gray">
      <RedPacket
        value={2.22}
        name="礼金券标题"
        endAt={endTs}
        desc="限淘宝天猫实物商品限淘宝天猫实物商品"
        variant="cash"
        status="expired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <hr />
    <DemoSection title="省钱卡-未失效" bg="gray">
      <RedPacket
        image="http://iph.href.lu/140x106?text=%E5%9B%BE%E7%89%87&fg=cacfd7&bg=f3f6f8"
        name="淘宝省钱月卡"
        desc="0元免至 2023.11"
        variant="image"
        btnText='去开通'
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="失效-已使用" bg="gray">
      <RedPacket
        image="http://iph.href.lu/140x106?text=%E5%9B%BE%E7%89%87&fg=cacfd7&bg=f3f6f8"
        name="权益标题"
        desc="权益使用条件/规则"
        variant="image"
        status="used"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="失效-已过期" bg="gray">
      <RedPacket
        image="http://iph.href.lu/140x106?text=%E5%9B%BE%E7%89%87&fg=cacfd7&bg=f3f6f8"
        name="权益标题"
        desc="权益使用条件/规则"
        variant="image"
        status="expired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
  </DemoPage>
);
