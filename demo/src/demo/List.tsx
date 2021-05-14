import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, List, ListItem } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <List>
        <ListItem content="内容1" />
        <ListItem content="内容2" />
        <ListItem content="内容3" />
      </List>
    </DemoSection>
    <DemoSection title="边框">
      <List bordered>
        <ListItem content="内容1" />
        <ListItem content="内容2" />
        <ListItem content="内容3" />
      </List>
    </DemoSection>
    <DemoSection title="图标">
      <List>
        <ListItem content="内容1" rightIcon="chevron-right" />
        <ListItem content="内容2" rightIcon="chevron-right" />
        <ListItem content="内容3" rightIcon="chevron-right" />
      </List>
    </DemoSection>
    <DemoSection title="Card + as=a + 图标">
      <Card>
        <List>
          <ListItem content="内容1" as="a" href="/" rightIcon="chevron-right" />
          <ListItem content="内容2" as="a" rightIcon="chevron-right" />
          <ListItem content="内容3" as="a" rightIcon="chevron-right" />
        </List>
      </Card>
    </DemoSection>
    <DemoSection title="Card + as=button + 图标">
      <Card>
        <List>
          <ListItem content="内容1" as="button" rightIcon="chevron-right" />
          <ListItem content="内容2" as="button" rightIcon="chevron-right" />
          <ListItem content="内容3" as="button" rightIcon="chevron-right" />
        </List>
      </Card>
    </DemoSection>
  </DemoPage>
);
