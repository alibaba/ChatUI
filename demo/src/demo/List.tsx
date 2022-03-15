import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, List, ListItem } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法" bg="gray">
      <List>
        <ListItem content="内容1" />
        <ListItem content="内容2" />
        <ListItem content="内容3" />
      </List>
    </DemoSection>
    <DemoSection title="边框" bg="gray">
      <List bordered>
        <ListItem content="内容1" />
        <ListItem content="内容2" />
        <ListItem content="内容3" />
      </List>
    </DemoSection>
    <DemoSection title="图标" bg="gray">
      <List>
        <ListItem content="内容1" rightIcon="chevron-right" />
        <ListItem content="内容2" rightIcon="chevron-right" />
        <ListItem content="内容3" rightIcon="chevron-right" />
      </List>
    </DemoSection>
    <DemoSection title="Card + as=a + 图标" bg="gray">
      <Card>
        <List>
          <ListItem content="内容1" as="a" href="/" rightIcon="chevron-right" />
          <ListItem content="内容2" as="a" rightIcon="chevron-right" />
          <ListItem content="内容3" as="a" rightIcon="chevron-right" />
        </List>
      </Card>
    </DemoSection>
    <DemoSection title="Card + as=button + 图标" bg="gray">
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
