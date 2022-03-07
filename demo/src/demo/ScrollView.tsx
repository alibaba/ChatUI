import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { ScrollView, Button } from '../../../src';

// const list = [{ text: '内容1' }, { text: '内容2' }, { text: '内容3' }];

export default () => {
  const [list, setList] = React.useState([{ text: '内容1' }, { text: '内容2' }, { text: '内容3' }]);
  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <button
          type="button"
          onClick={() =>
            setList((s) => [...s, { text: '内容4' }, { text: '内容5' }, { text: '内容6' }])
          }
        >
          add
        </button>
        <button
          type="button"
          onClick={() => setList([{ text: '内容1' }, { text: '内容2' }, { text: '内容3' }])}
        >
          add
        </button>
        <ScrollView data={list} renderItem={(item) => <Button label={item.text} />} />
      </DemoSection>
    </DemoPage>
  );
};
