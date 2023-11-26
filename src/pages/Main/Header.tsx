import { Layout, Space, Image, Avatar, Button } from '@arco-design/web-react';
import React from 'react';
import styled from 'styled-components';
import { IconUser } from '@arco-design/web-react/icon';
import Icon from '@/assets/icon.png';
import { IconCrate, IconNotification, IconTrophy, IconZh } from '@/Icons';
import { columns } from '@/pages/Main/const';

const { Header: AHeader } = Layout;

export const Header = () => {
  return (
    <UHeader>
      <Space>
        <WebIcon>
          <Image src={Icon} width={32} height={32} preview={false} />
          <Sit>Tech</Sit>
        </WebIcon>
        <Category>
          {columns.map(value => (
            <Column key={value.value}>{value.label}</Column>
          ))}
        </Category>
      </Space>
      <Space size={32}>
        <IconTrophy width={24} height={24} style={{ fill: '#575c62' }} />
        <IconNotification width={24} height={24} style={{ fill: '#575c62' }} />
        {/*<IconEn style={{ width: 24, height: 24 }} />*/}
        <IconZh width={24} height={24} style={{ fill: '#575c62' }} />
        <CAvatar style={{ backgroundColor: '#3370ff' }}>
          <IconUser />
        </CAvatar>
        <Button size="large" icon={<IconCrate width={14} height={14} style={{ fill: '#ffffff' }} />} type="primary">
          创作
        </Button>
      </Space>
    </UHeader>
  );
};

const UHeader = styled(AHeader)`
  width: 1200px;
  height: 72px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Sit = styled.div`
  font-size: 32px;
  color: #004fc4;
  font-weight: 600;
`;

const WebIcon = styled(Space)`
  cursor: pointer;
`;

const Category = styled(Space)``;

const Column = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-left: 32px;
  color: #575c62;
`;

const CAvatar = styled(Avatar)`
  transition: transform 0.3s ease-in-out; // 添加平滑的变换效果
  &:hover {
    transform: scale(1.5); // 鼠标悬浮时放大 10%
  }
  cursor: pointer;
`;
