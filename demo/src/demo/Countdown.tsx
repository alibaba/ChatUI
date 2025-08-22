import { DemoPage, DemoSection } from '../components';
import { Countdown } from '../../../src';

const getTodayEndTimestamp = (): number => {
  const date = new Date();
  date.setHours(23, 59, 59, 999);
  return date.getTime();
};

const endTs = getTodayEndTimestamp();

export default () => {
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Countdown targetDate={endTs} />
      </DemoSection>
    </DemoPage>
  );
};
