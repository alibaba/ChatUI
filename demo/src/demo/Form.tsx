import React from 'react';
import { DemoPage, DemoSection } from '../components';
import { Form, FormItem, FormActions, Input, Button } from '../../../src';
import '../../../src/styles/index.less';

export default () => (
  <DemoPage>
    <DemoSection title="基础用法">
      <Form>
        <FormItem>
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem>
          <Input value="" placeholder="密码" />
        </FormItem>
        <FormActions>
          <Button>确认</Button>
        </FormActions>
      </Form>
    </DemoSection>
    <DemoSection title="显示标签">
      <Form>
        <FormItem label="用户名">
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem label="密码">
          <Input value="" placeholder="密码" />
        </FormItem>
      </Form>
    </DemoSection>
    <DemoSection title="提示文案">
      <Form>
        <FormItem label="用户名" help="最多6个字">
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem label="密码">
          <Input value="" placeholder="密码" />
        </FormItem>
      </Form>
    </DemoSection>
    <DemoSection title="错误提示">
      <Form>
        <FormItem label="用户名" help="最多6个字" invalid>
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem label="密码">
          <Input value="" placeholder="密码" />
        </FormItem>
      </Form>
    </DemoSection>
    <DemoSection title="显示必填">
      <Form>
        <FormItem label="用户名" required>
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem label="密码" required>
          <Input value="" placeholder="密码" />
        </FormItem>
      </Form>
    </DemoSection>
    <DemoSection title="light 风格" bg="light-2">
      <Form theme="light">
        <FormItem>
          <Input value="" placeholder="用户名" />
        </FormItem>
        <FormItem>
          <Input value="" placeholder="密码" />
        </FormItem>
      </Form>
    </DemoSection>
  </DemoPage>
);
