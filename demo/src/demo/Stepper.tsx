import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Stepper, Step } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Stepper current={3}>
        <Step title="买家申请退款退货" desc="昨天 12:00" />
        <Step title="卖家处理申请" desc="卖家还有22小时22分22秒处理" />
        <Step title="买家填写退货并填写物流信息" desc="昨天 15:00" />
        <Step title="卖家确认收货并退款" desc="昨天 16:00" />
        <Step title="退款成功" />
      </Stepper>
    </DemoSection>
    <DemoSection title="倒序">
      <Stepper inverted>
        <Step
          title="官方客服处理中"
          subTitle="05-23 11:23"
          desc="客服将在24小时内联系您核实问题，请注意接听。"
        />
        <Step
          title="您发起投诉"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>投诉原因：物流问题，未放指定代收点。</div>
              <div>投诉说明：都说了很多遍不要放驿站，还是放了。</div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
    <DemoSection title="倒序&成功">
      <Stepper inverted status="success">
        <Step
          title="官方客服判决，投诉成立"
          subTitle="05-23 11:23"
          desc="客服将在24小时内联系您核实问题，请注意接听。"
        />
        <Step
          title="您补充留言"
          subTitle="05-23 11:23"
          desc="卖家说好要发货怎么不发货，态度太差了！！"
        />
        <Step title="买家填写退货并填写物流信息" subTitle="昨天 15:00" />
        <Step title="卖家确认收货并退款" subTitle="昨天 16:00" />
        <Step title="退款成功" />
      </Stepper>
    </DemoSection>
    <DemoSection title="倒序&失败">
      <Stepper inverted status="fail">
        <Step
          title="官方客服判决，投诉不成立"
          subTitle="05-23 11:23"
          desc="原因：核实订单还在约定发货时效内，已催促卖家发货，请耐心等待。"
        />
        <Step
          title="官方客服处理中"
          subTitle="05-23 11:23"
          desc="客服将在24小时内联系您核实问题，请注意接听。"
        />
        <Step
          title="您发起投诉"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>投诉原因：物流问题，未放指定代收点。</div>
              <div>投诉说明：都说了很多遍不要放驿站，还是放了。</div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
    <DemoSection title="倒序&取消">
      <Stepper inverted status="abort">
        <Step title="您撤销投诉" subTitle="05-23 11:23" desc="若后续遇到有问题，您可联系客服。" />
        <Step
          title="官方客服处理中"
          subTitle="05-23 11:23"
          desc="客服将在24小时内联系您核实问题，请注意接听。"
        />
        <Step
          title="您发起投诉"
          subTitle="05-23 11:23"
          desc={
            <div>
              <div>投诉原因：物流问题，未放指定代收点。</div>
              <div>投诉说明：都说了很多遍不要放驿站，还是放了。</div>
            </div>
          }
        />
      </Stepper>
    </DemoSection>
  </DemoPage>
);
