import { DemoPage, DemoSection } from '../components';
import { Tips } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Tips>
        提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容
      </Tips>
    </DemoSection>
    <DemoSection title="大尺寸">
      <Tips size="lg">
        提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容
      </Tips>
    </DemoSection>
    <DemoSection title="强提醒">
      <Tips primary>
        提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容
      </Tips>
    </DemoSection>
    <DemoSection title="大尺寸 + 强提醒">
      <Tips size="lg" primary>
        提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容提示内容
      </Tips>
    </DemoSection>
  </DemoPage>
);
