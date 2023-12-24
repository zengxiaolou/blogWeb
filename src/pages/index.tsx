import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Card, Tooltip } from '@arco-design/web-react';
import backgroundImage from '../assets/background.png';

import { IconAccount, IconQr } from '@/Icons';
import QR from '@/pages/QR';
import Account from '@/pages/Account';

const Main = () => {
  const [method, setMethod] = useState('qr');
  const [isEntering, setIsEntering] = useState(true);

  const switchMethod = (newMethod: string) => {
    setIsEntering(false);
    setTimeout(() => {
      setMethod(newMethod);
      setIsEntering(true);
    }, 500);
  };

  return (
    <Wrapper>
      <UCard>
        <Method>
          <Tooltip color="#165DFF" content={method === 'qr' ? '账号登录' : '扫码登录'} position="left">
            {method === 'account' ? (
              <div onClick={() => switchMethod('qr')}>
                <IconQr style={{ cursor: 'pointer' }} width={42} height={42} />
              </div>
            ) : (
              <div onClick={() => switchMethod('account')}>
                <IconAccount style={{ cursor: 'pointer' }} width={42} height={42} />
              </div>
            )}
          </Tooltip>
        </Method>
        <AnimatedComponent isEntering={isEntering}>{method === 'qr' ? <QR /> : <Account />}</AnimatedComponent>
      </UCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const UCard = styled(Card)`
  width: 442px;
  height: 548px;
  border-radius: 15px;
  &.arco-card-size-default .arco-card-body {
    padding: 8px;
  }
`;

const Method = styled.div`
  display: flex;
  justify-content: end;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const AnimatedComponent = styled.div<{ isEntering: boolean }>`
  animation: ${properties => (properties.isEntering ? slideIn : slideOut)} 0.3s forwards;
  position: absolute;
  width: 100%;
`;

export default Main;
