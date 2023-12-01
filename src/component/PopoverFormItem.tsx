import React, { FC } from 'react';
import { Popover, RulesProps, InputProps, Input } from '@arco-design/web-react';
import { IconCheckCircleFill, IconCloseCircleFill } from '@arco-design/web-react/icon';

interface PopoverFormItemProperties extends InputProps {
  rules?: RulesProps[];
  onChange?: (value: string) => void;
  value?: string;
}

const InputPopoverVerify: FC<PopoverFormItemProperties> = ({ rules, onChange, value, ...rest }) => {
  // eslint-disable-next-line complexity
  const validateRule = (rule: RulesProps) => {
    if (rule.required && !value) {
      return false;
    }
    if (rule.type && typeof value !== rule.type) {
      return false;
    }
    if (rule?.deepEqual && (!value || !rule.deepEqual(value))) {
      return false;
    }
    if (rule.minLength && (!value || value.length < rule.minLength)) {
      return false;
    }
    if (rule.maxLength && (!value || value.length > rule.maxLength)) {
      return false;
    }
    if (rule?.length && (!value || value?.length != rule.length)) {
      return false;
    }
    if (rule?.min && (!value || Number(value) < rule?.min)) {
      return false;
    }
    if (rule?.max && (!value || Number(value) > rule?.max)) {
      return false;
    }
    if (rule.equal && (!value || Number(value) !== rule.equal)) {
      return false;
    }
    return !(rule.match && (!value || !rule.match.test(value)));
  };

  const renderValidationContent = () => {
    const validationResults = rules?.map(rule => ({ message: rule?.message, valid: validateRule(rule) }));
    return validationResults?.map((result, index) => (
      <div key={index}>
        {result.valid ? (
          <IconCheckCircleFill style={{ color: 'green' }} />
        ) : (
          <IconCloseCircleFill style={{ color: 'red' }} />
        )}
        <span style={{ marginLeft: 8 }}>{result.message}</span>
      </div>
    ));
  };
  return (
    <Popover content={renderValidationContent()} position="bottom">
      <Input value={value} onChange={onChange} {...rest} allowClear />
    </Popover>
  );
};
export default InputPopoverVerify;
