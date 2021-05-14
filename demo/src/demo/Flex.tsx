import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Flex, FlexItem } from '../../../src';
import '../../../src/styles/index.less';

function FluidLayout({ n }) {
  return (
    <div>
      <h5>{`${n}个`}</h5>
      <Flex
        wrap="wrap"
        style={{ width: '200px', height: '150px', background: 'black', alignContent: 'flex-start' }}
      >
        {Array.from(Array(n)).map((t, i) => (
          <FlexItem
            flex="0 0 25%"
            style={{
              boxSizing: 'border-box',
              height: '50px',
              border: '1px solid red',
              background: 'white',
            }}
            key={i}
          />
        ))}
      </Flex>
    </div>
  );
}

export default () => (
  <DemoPage>
    <DemoSection title="基本网格布局">
      <Flex>
        <FlexItem>
          <p>1/2</p>
        </FlexItem>
        <FlexItem>
          <p>1/2</p>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem>
          <p>1/3</p>
        </FlexItem>
        <FlexItem>
          <p>1/3</p>
        </FlexItem>
        <FlexItem>
          <p>1/3</p>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem>
          <p>1/4</p>
        </FlexItem>
        <FlexItem>
          <p>1/4</p>
        </FlexItem>
        <FlexItem>
          <p>1/4</p>
        </FlexItem>
        <FlexItem>
          <p>1/4</p>
        </FlexItem>
      </Flex>
    </DemoSection>
    <DemoSection title="百分比布局">
      <Flex>
        <FlexItem flex="0 0 50%">
          <p>1/2</p>
        </FlexItem>
        <FlexItem>
          <p>auto</p>
        </FlexItem>
        <FlexItem>
          <p>auto</p>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem flex="0 0 25%">
          <p>1/4</p>
        </FlexItem>
        <FlexItem>
          <p>auto</p>
        </FlexItem>
        <FlexItem flex="0 0 33.3333%">
          <p>1/3</p>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem flex="0 0 25%">
          <p>1/4</p>
        </FlexItem>
        <FlexItem>
          <p>auto</p>
        </FlexItem>
        <FlexItem flex="0 0 33.3333%">
          <p>1/3</p>
        </FlexItem>
      </Flex>
    </DemoSection>
    <DemoSection title="圣杯布局">
      <Flex direction="column">
        <header>
          <p>Header</p>
        </header>
        <FlexItem>
          <Flex>
            <FlexItem flex="1">
              <p>Center</p>
            </FlexItem>
            <FlexItem flex="0 0 150px" order={-1}>
              <p>Left</p>
            </FlexItem>
            <FlexItem flex="0 0 150px">
              <p>Right</p>
            </FlexItem>
          </Flex>
        </FlexItem>
        <footer>
          <p>Footer</p>
        </footer>
      </Flex>
    </DemoSection>
    <DemoSection title="Media object">
      <Flex>
        <svg
          width="100"
          height="100"
          xmlns="http://www.w3.org/2000/svg"
          style={{ textAnchor: 'middle' }}
        >
          <rect width="100%" height="100%" fill="#e5e5e5" />
          <text x="50%" y="50%" fill="#999" dy=".3em">
            Image
          </text>
        </svg>
        <FlexItem>
          <div style={{ marginLeft: '1rem' }}>
            This is some content from a media component. You can replace this with any content and
            adjust it as needed.
          </div>
        </FlexItem>
      </Flex>
    </DemoSection>
    <DemoSection title="流式布局">
      <FluidLayout n={8} />
      <FluidLayout n={9} />
      <FluidLayout n={10} />
    </DemoSection>
  </DemoPage>
);
