import React from 'react';
import styled from 'styled-components';
import { Image, Typography } from '@arco-design/web-react';
import Qr from '@/assets/qr.png';

const { Title, Text } = Typography;
const QR = () => {
  return (
    <Wrapper>
      <Typography></Typography>
      <Title heading={4}>扫码登录</Title>
      <div>
        <Text style={{ color: '#646a73' }}>请使用Tech手机端扫描二维码</Text>
      </div>
      <Image src={Qr} width={200} height={200} style={{ marginTop: 64 }} preview={false} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

export default QR;
