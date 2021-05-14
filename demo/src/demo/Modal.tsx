import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Modal, Card, List, ListItem } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

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
            <ListItem
              content="背景不可点击"
              as="button"
              onClick={() => {
                setOpen2(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="竖排按钮"
              as="button"
              onClick={() => {
                setOpen4(true);
              }}
              rightIcon="chevron-right"
            />
            <ListItem
              content="横排按钮"
              as="button"
              onClick={() => {
                setOpen5(true);
              }}
              rightIcon="chevron-right"
            />
          </List>
        </Card>
      </DemoSection>
      <Modal
        active={open1}
        title="标题"
        onClose={() => {
          setOpen1(false);
        }}
      >
        <div style={{ padding: '0px 15px' }}>
          <p>内容详情内容详情内容详情内容详情内容详情内容详情</p>
        </div>
      </Modal>
      <Modal
        active={open2}
        title="标题"
        onClose={() => {
          setOpen2(false);
        }}
        backdrop="static"
      >
        <div style={{ padding: '0px 15px' }}>
          <p>内容详情内容详情内容详情内容详情内容详情内容详情</p>
        </div>
      </Modal>
      <Modal
        active={open3}
        title="标题"
        onClose={() => {
          setOpen3(false);
        }}
        showClose={false}
      >
        <div style={{ padding: '0px 15px' }}>
          <p>内容详情内容详情内容详情内容详情内容详情内容详情</p>
        </div>
      </Modal>
      <Modal
        active={open4}
        title="标题"
        onClose={() => {
          setOpen4(false);
        }}
        actions={[{ label: '强按钮', color: 'primary' }, { label: '弱按钮' }]}
      >
        <div style={{ padding: '0px 15px' }}>
          <p>内容详情内容详情内容详情内容详情内容详情内容详情</p>
        </div>
      </Modal>
      <Modal
        active={open5}
        title="标题"
        onClose={() => {
          setOpen5(false);
        }}
        actions={[{ label: '强按钮', color: 'primary' }, { label: '弱按钮' }]}
        vertical={false}
      >
        <div style={{ padding: '0px 15px' }}>
          <p>内容详情内容详情内容详情内容详情内容详情内容详情</p>
        </div>
      </Modal>
    </DemoPage>
  );
};
