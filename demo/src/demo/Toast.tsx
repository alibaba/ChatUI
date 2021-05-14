import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Card, List, ListItem, toast } from '../../../src';
import '../../../src/styles/index.less';

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
              toast.loading('加载中...');
            }}
            rightIcon="chevron-right"
          />
        </List>
      </Card>
    </DemoSection>
  </DemoPage>
);
