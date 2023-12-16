import { Tabs } from '@arco-design/web-react';
import React, { useState } from 'react';
import Login from '@/pages/Login';
import RegisterForm from '@/pages/RegisterForm';

const Account = () => {
  const [activeTab, setActiveTab] = useState('login');
  return (
    <Tabs activeTab={activeTab} onChange={setActiveTab}>
      <Tabs.TabPane title="登录" key="login">
        <Login />
      </Tabs.TabPane>
      <Tabs.TabPane title="注册" key="register">
        <RegisterForm onSubmit={() => console.log('🤮 ~ file:index method: line:17 -----')} />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default Account;
