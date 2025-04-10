import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Confirm, Card, List, ListItem } from '../../../src';

export default () => {
  const [open1, setOpen1] = useState(false);

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Card>
          <List>
            <ListItem
              content="展示弹出层"
              as="button"
              onClick={() => {
                setOpen1(true);
              }}
              rightIcon="chevron-right"
            />
          </List>
        </Card>
      </DemoSection>
      <Confirm
        active={open1}
        title="标题"
        onClose={() => {
          setOpen1(false);
        }}
        actions={[
          {
            label: '确认',
            color: 'primary',
          },
        ]}
      >
        <div>内容详情内容详情内容详情内容详情内容详情内容详情</div>
      </Confirm>
    </DemoPage>
  );
};
