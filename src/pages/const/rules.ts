export const NameRules = [
  { required: true, message: '用户名不为空' },
  { minLength: 3, message: '用户名长度不能小于3个字符' },
  { maxLength: 64, message: '用户名长度不能大于64个字符' },
];

export const PasswordRules = [
  { required: true, message: '密码不为空' },
  { minLength: 8, message: '密码长度不能小于8个字符' },
  {
    match: /^(?:(?=.*[A-Za-z])(?=.*\d)|(?=.*[A-Za-z])(?=.*[!#$%&*@^])|(?=.*\d)(?=.*[!#$%&*@^])).*/,
    message: '密码应该包含字母、数字、特殊字符中的两种',
  },
];

export const confirmPasswordRules = (password: String) => {
  return [
    { required: true, message: '确认密码不为空' },
    { minLength: 8, message: '确认密码长度不能小于8个字符' },
    {
      deepEqual: password || 'null',
      message: '两次输入的密码不一致',
    },
  ];
};

export const EmailRules = [
  { required: true, message: '邮箱不为空' },
  { match: /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/, message: '邮箱格式不正确' },
];

export const VerificationCode = [
  { required: true, message: '验证码不为空' },
  { length: 6, message: '验证码长度为6个字符' },
];
