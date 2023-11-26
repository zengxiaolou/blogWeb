import React from 'react';
import { Layout } from '@arco-design/web-react';
import styled from 'styled-components';
import { Header } from '@/pages/Main/Header';

const { Content } = Layout;

export const Main = () => {
  return (
    <ULayout>
      <Header />
      <Content>Content</Content>
    </ULayout>
  );
};

const ULayout = styled(Layout)`
  height: 100%;
  width: 100%;
`;
