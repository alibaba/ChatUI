import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { InfiniteScroll } from '../../../src';

export default () => {
  const [list, setList] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [disabled, setDisabled] = useState(false);

  function handleLoadMore() {
    if (list.length > 50) {
      setDisabled(true);
      return;
    }

    for (let i = 0; i < 10; i += 1) {
      setList((s) => [...s, s.length + 1]);
    }
  }

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <button onClick={() => setDisabled((s) => !s)} type="button">
          Toggle
        </button>
        {` : ${disabled}`}
        <InfiniteScroll style={{ height: '200px' }} disabled={disabled} onLoadMore={handleLoadMore}>
          <ul>
            {list.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </InfiniteScroll>
      </DemoSection>
    </DemoPage>
  );
};
