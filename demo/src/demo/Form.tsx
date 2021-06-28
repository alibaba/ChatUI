import React, { useState } from 'react';
import { DemoPage, DemoSection } from '../components';
import { Form, FormItem, FormActions, Input, Button, RadioGroup } from '../../../src';
import '../../../src/styles/index.less';

export default () => {
  const [usename, setUsername] = useState('');
  const [theme, setTheme] = useState('');

  return (
    <DemoPage>
      <DemoSection title="基础用法">
        <Form theme={theme}>
          <FormItem>
            <Input value={usename} placeholder="用户名" onChange={setUsername} maxLength={6} />
          </FormItem>
          <FormItem>
            <Input value="" placeholder="密码" />
          </FormItem>
          <FormActions>
            <Button color="primary">确认</Button>
          </FormActions>
        </Form>
      </DemoSection>
      <DemoSection title="显示标签">
        <Form theme={theme}>
          <FormItem label="选择主题风格">
            <RadioGroup
              options={[{ value: '', label: 'default' }, { value: 'light' }]}
              value={theme}
              onChange={(val) => {
                setTheme(val as string);
              }}
            />
          </FormItem>
          <FormItem label="用户名">
            <Input value="" placeholder="用户名" />
          </FormItem>
          <FormItem label="密码">
            <Input value="" placeholder="密码" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="提示文案">
        <Form theme={theme}>
          <FormItem label="用户名" help="最多6个字">
            <Input value="" placeholder="用户名" />
          </FormItem>
          <FormItem label="密码">
            <Input value="" placeholder="密码" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="错误提示">
        <Form theme={theme}>
          <FormItem label="用户名" help="最多6个字" invalid>
            <Input value="" placeholder="用户名" />
          </FormItem>
          <FormItem label="密码">
            <Input value="" placeholder="密码" />
          </FormItem>
        </Form>
      </DemoSection>
      <DemoSection title="显示必填">
        <Form theme={theme}>
          <FormItem label="用户名" required>
            <Input value="" placeholder="用户名" />
          </FormItem>
          <FormItem label="密码" required>
            <Input value="" placeholder="密码" />
          </FormItem>
        </Form>
      </DemoSection>
    </DemoPage>
  );
};
