import React from 'react';
import styled from 'styled-components';
import { Button, Divider, Form, Input, Space } from '@arco-design/web-react';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import { IconGithub, IconQQ, IconTelegram, IconWechat, IconGoogle } from '@/Icons';

const thirdParty = [
  {
    label: 'github',
    component: <IconGithub width={32} height={32} />,
  },
  {
    label: 'google',
    component: <IconGoogle width={32} height={32} />,
  },
  {
    label: 'wechat',
    component: <IconWechat width={32} height={32} />,
  },
  {
    label: 'qq',
    component: <IconQQ width={32} height={32} />,
  },
  {
    label: 'telegram',
    component: <IconTelegram width={32} height={32} />,
  },
];

const Login = () => {
  return (
    <Wrapper>
      <Form wrapperCol={{ span: 24 }} labelAlign="left" style={{ width: '80%', margin: '0 auto' }}>
        <Form.Item field="username" rules={[{ required: true, message: '用户名必填' }]}>
          <Input prefix={<IconUser />} placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item field="password">
          <Input.Password prefix={<IconLock />} placeholder="请输入密码" />
        </Form.Item>
        <LoginButton type="primary" htmlType="submit" style={{ marginTop: 24 }}>
          登录
        </LoginButton>
      </Form>
      <Divider style={{ marginTop: 32 }}>其他方式登录</Divider>
      <ThirdParty>
        <Space size={32}>
          {thirdParty.map((value, index) => (
            <div key={index} style={{ cursor: 'pointer' }}>
              {value.component}
            </div>
          ))}
        </Space>
      </ThirdParty>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 24px;
`;

const LoginButton = styled(Button)`
  border-radius: 25px;
`;

const ThirdParty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 32px;
`;

export default Login;
