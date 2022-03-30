import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, List, ListItem, toast } from '../../../src';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Card>
        <List>
          <ListItem
            content="文字提示"
            as="button"
            onClick={() => {
              toast.show('提示内容', '');
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="成功提示"
            as="button"
            onClick={() => {
              toast.success('操作成功');
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="失败提示"
            as="button"
            onClick={() => {
              toast.fail('操作失败');
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="加载提示"
            as="button"
            onClick={() => {
              toast.loading('加载中...', -1);
            }}
            rightIcon="chevron-right"
          />
          <ListItem
            content="长文案"
            as="button"
            onClick={() => {
              toast.success('很高兴能帮助到您文案，到您文案您文案到您文案到您文案');
            }}
            rightIcon="chevron-right"
          />
        </List>
      </Card>
    </DemoSection>
  </DemoPage>
);
