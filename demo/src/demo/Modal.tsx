import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Modal, Card, List, ListItem } from '../../../src';

function MainContent() {
  return (
    <div>
      亲，选择保持排队后，请在 10分钟 内返回对话页面进行咨询，否则系统将会自动结束本次通话哦~
    </div>
  );
}

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
        <MainContent />
      </Modal>
      <Modal
        active={open2}
        title="标题"
        onClose={() => {
          setOpen2(false);
        }}
        backdrop="static"
      >
        <MainContent />
      </Modal>
      <Modal
        active={open3}
        title="标题"
        onClose={() => {
          setOpen3(false);
        }}
        showClose={false}
      >
        <MainContent />
      </Modal>
      <Modal
        active={open4}
        title="标题"
        onClose={() => {
          setOpen4(false);
        }}
        actions={[{ label: '确认', color: 'primary' }, { label: '取消' }]}
      >
        <MainContent />
      </Modal>
      <Modal
        active={open5}
        title="需要保持排队吗?"
        onClose={() => {
          setOpen5(false);
        }}
        actions={[{ label: '结束排队' }, { label: '保持排队', color: 'primary' }]}
        vertical={false}
      >
        <MainContent />
      </Modal>
    </DemoPage>
  );
};
