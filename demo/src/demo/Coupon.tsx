import { DemoPage, DemoSection } from '../components';
import { Coupon, Countdown } from '../../../src';

const getTodayEndTimestamp = (): number => {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date.getTime();
};

const endTs = getTodayEndTimestamp();

export default () => (
  <DemoPage>
    <DemoSection title="列表优惠券：未失效 有效期＞24小时" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        inList
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表优惠券：未失效 有效期≤24小时" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        inList
        status="nearExpired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表优惠券：失效-已使用" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        inList
        status="used"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="列表优惠券：失效-已过期" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        inList
        status="expired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <hr />
    <DemoSection title="单优惠券：未失效 有效期＞24小时" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单优惠券：未失效 有效期≤24小时 标签状态" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        status="nearExpired"
        desc="限该店内商品使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单优惠券：未失效 有效期≤24小时 倒计时" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        status="nearExpired"
        dateDesc={<><span>限时</span> <Countdown targetDate={endTs} /></>}
        desc="限该店内商品使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单优惠券：失效-已使用" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        status="used"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="单优惠券：失效-已过期" bg="gray">
      <Coupon
        value={2.22}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        status="expired"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <hr />
    <DemoSection title="单优惠券：折扣券" bg="gray">
      <Coupon
        discount={9.5}
        condition="满10元可用"
        name="优惠券标题"
        endAt={endTs}
        desc="限该店内商品使用"
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
  </DemoPage>
);
