import React, { useState } from 'react';
import { DemoPage, DemoSection, LangSwitcher } from '../components';
import { Time, LocaleProvider } from '../../../src';

const now = Date.now();
const MS_A_DAY = 24 * 60 * 60 * 1000;
const MS_A_WEEK = MS_A_DAY * 7;

export default () => {
  const [lang, setLang] = useState('zh-CN');

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <LangSwitcher value={lang} onChange={setLang} />
        <LocaleProvider locale={lang}>
          <p>
            <span>现在：</span>
            <Time date={now} />
          </p>
          <p>
            <span>刚才：</span>
            <Time date={now - 120000} />
          </p>
          <p>
            <span>昨天：</span>
            <Time date={now - MS_A_DAY} />
          </p>
          <p>
            <span>前天：</span>
            <Time date={now - MS_A_DAY * 2} />
          </p>
          <p>
            <span>上上周：</span>
            <Time date={now - MS_A_WEEK * 2} />
          </p>
        </LocaleProvider>
      </DemoSection>
    </DemoPage>
  );
};
