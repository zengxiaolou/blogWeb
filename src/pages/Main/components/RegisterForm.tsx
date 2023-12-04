import { Button, Form, Notification } from '@arco-design/web-react';
import { IconEmail, IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { IconCaptcha } from '@/Icons';
import InputPopoverVerify from '@/component/PopoverFormItem';
import { confirmPasswordRules, EmailRules, NameRules, PasswordRules, VerificationCode } from '@/pages/const/rules';
import { useCreateUser, useGetRegisterCode } from '@/api/services/user';
import { CreateUserRequest } from '@/api/types/users';
const FormItem = Form.Item;

interface properties {
  onSubmit: () => void;
}

export const RegisterForm: FC<properties> = ({ onSubmit }) => {
  const [countdown, setCountdown] = useState(0);

  const [form] = Form.useForm();
  const email = Form.useWatch('email', form);
  const code = Form.useWatch('code', form);
  const password = Form.useWatch('password', form);

  const { loading, run } = useGetRegisterCode();
  const { loading: createLoading, run: create } = useCreateUser();

  useEffect(() => {
    let intervalId: any;

    if (countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown(currentCountdown => currentCountdown - 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [countdown]);
  const handleGetCode = async () => {
    setCountdown(60);
    const result = await run({ data: { email } });
    if (result?.metadata?.code === 'ok') {
      Notification.success({ title: '请求成功', content: result?.metadata?.message });
    } else if (result?.metadata?.code === 'fail') {
      Notification.error({ title: '获取验证码失败', content: result?.metadata?.message });
    }
  };

  const handleSubmit = async (value: CreateUserRequest) => {
    const result = await create({ data: value });
    if (result?.metadata?.code === 'ok') {
      Notification.success({ title: '注册成功', content: result?.metadata?.message });
      onSubmit();
    }
  };

  return (
    <Form form={form} wrapperCol={{ span: 24 }} onSubmit={handleSubmit} style={{ width: '80%', margin: '0 auto' }}>
      <FormItem field="username" rules={NameRules}>
        <InputPopoverVerify prefix={<IconUser />} placeholder="用户名" rules={NameRules} />
      </FormItem>
      <FormItem field="password" rules={PasswordRules}>
        <InputPopoverVerify
          type="password"
          placeholder="设置密码"
          prefix={<IconLock />}
          rules={PasswordRules}
          isPassword={true}
        />
      </FormItem>
      <FormItem field="confirmPassword" rules={confirmPasswordRules(password)}>
        <InputPopoverVerify
          type="password"
          placeholder="确认密码"
          prefix={<IconLock />}
          rules={confirmPasswordRules(password)}
          isPassword={true}
        />
      </FormItem>
      <FormItem field="email" rules={EmailRules}>
        <InputPopoverVerify placeholder="邮箱" prefix={<IconEmail />} rules={EmailRules} />
      </FormItem>
      <div style={{ display: 'flex' }}>
        <FormItem field="code" wrapperCol={{ span: 22 }} rules={VerificationCode}>
          <InputPopoverVerify
            placeholder="验证码"
            prefix={<IconCaptcha width={16} height={16} />}
            rules={VerificationCode}
          />
        </FormItem>
        <Button disabled={!email || countdown > 0} loading={loading} onClick={handleGetCode}>
          {countdown > 0 ? `${countdown}S` : '获取验证码'}
        </Button>
      </div>
      <Register loading={createLoading} type="primary" htmlType="submit" disabled={!code}>
        注册
      </Register>
    </Form>
  );
};

const Register = styled(Button)`
  border-radius: 25px;
`;
