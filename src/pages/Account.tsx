import { Tabs, Typography } from '@arco-design/web-react';
import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '@/pages/Login';
import RegisterForm from '@/pages/RegisterForm';

const { Title } = Typography;

const Account = () => {
  const [activeTab, setActiveTab] = useState('login');
  return (
    <Wrapper>
      <Title heading={4}>欢迎使用Tech</Title>
      <Tabs activeTab={activeTab} onChange={setActiveTab}>
        <Tabs.TabPane title="登录" key="login">
          <Login />
        </Tabs.TabPane>
        <Tabs.TabPane title="注册" key="register">
          <RegisterForm />
        </Tabs.TabPane>
      </Tabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 16px;
`;

export default Account;
