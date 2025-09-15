import { DemoPage, DemoSection } from '../components';
import { MultiRedPacket } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="多红包">
      <MultiRedPacket
        name="红包组名称"
        count={3}
        total={50}
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
    <DemoSection title="红包+现金">
      <MultiRedPacket
        name="现金红包组名称"
        variant="cash"
        total={50}
        onClick={() => {
          console.log('on click');
        }}
      />
    </DemoSection>
  </DemoPage>
);
