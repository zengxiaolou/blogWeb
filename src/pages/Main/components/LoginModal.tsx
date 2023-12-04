import styled from 'styled-components';
import React from 'react';
import { Form, Modal, Tabs } from '@arco-design/web-react';
import { useToggle } from '@/hooks/useToggle';
import { RegisterForm } from '@/pages/Main/components/RegisterForm';

const { TabPane } = Tabs;

export const LoginModal = () => {
  const [visible, open, close] = useToggle(false);
  const [active, setActive] = React.useState('login');
  return (
    <>
      <Login onClick={() => open()}>登录</Login>
      {/* eslint-disable-next-line unicorn/no-null*/}
      <UModal visible={visible} onCancel={close} footer={null} closeIcon={null} unmountOnExit={true}>
        <Tabs activeTab={active} onChange={setActive}>
          <TabPane title="登录" key="login"></TabPane>
          <TabPane title="注册" key="register">
            <RegisterForm onSubmit={close} />
          </TabPane>
        </Tabs>
        <Form></Form>
      </UModal>
    </>
  );
};

const Login = styled.div`
  cursor: pointer;
`;

const UModal = styled(Modal)`
  border-radius: 15px;
  width: 400px;
`;
