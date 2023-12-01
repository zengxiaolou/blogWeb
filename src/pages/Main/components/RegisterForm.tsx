import { Button, Form } from '@arco-design/web-react';
import { IconEmail, IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { FC } from 'react';
import styled from 'styled-components';
import { IconCaptcha } from '@/Icons';
import InputPopoverVerify from '@/component/PopoverFormItem';
import { confirmPasswordRules, EmailRules, NameRules, PasswordRules, VerificationCode } from '@/pages/const/rules';
import { useGetRegisterCode } from '@/api/services/user';
const FormItem = Form.Item;

interface properties {
  onSubmit: () => void;
}

export const RegisterForm: FC<properties> = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const email = Form.useWatch('email', form);
  const code = Form.useWatch('code', form);
  const password = Form.useWatch('password', form);
  const handleSubmit = () => {
    onSubmit();
  };

  const { data, loading, run } = useGetRegisterCode();

  const handleGetCode = () => {
    run({ data: { email } });
  };
  console.log('🤮 ~ file:RegisterForm method:RegisterForm line:29 -----', data);

  return (
    <Form form={form} wrapperCol={{ span: 24 }} style={{ width: '80%', margin: '0 auto' }} onSubmit={handleSubmit}>
      <FormItem field="username" rules={NameRules}>
        <InputPopoverVerify prefix={<IconUser />} placeholder="用户名" rules={NameRules} />
      </FormItem>
      <FormItem field="password" rules={PasswordRules}>
        <InputPopoverVerify type="password" placeholder="设置密码" prefix={<IconLock />} rules={PasswordRules} />
      </FormItem>
      <FormItem field="confirmPassword" rules={confirmPasswordRules(password)}>
        <InputPopoverVerify
          type="password"
          placeholder="确认密码"
          prefix={<IconLock />}
          rules={confirmPasswordRules(password)}
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
        <Button disabled={!email} loading={loading} onClick={handleGetCode}>
          获取验证码
        </Button>
      </div>
      <Register type="primary" disabled={!code}>
        注册
      </Register>
    </Form>
  );
};

const Register = styled(Button)`
  border-radius: 25px;
`;
