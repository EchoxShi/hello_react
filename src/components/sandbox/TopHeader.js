import React, { useState } from 'react'
import { Layout, theme, Dropdown,Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Header } = Layout;
export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      label: '超级管理员',
      key: '1',
    },
    {
      label: '退出',
      key: '3',
      danger: true,
    },
  ];
  return (
    <Header style={{ padding: '0 16', background: colorBgContainer, }}>
      {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => setCollapsed(!collapsed),
    })} */}
      {
        collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined onClick={changeCollapsed} />
      }
      <div style={{ float: 'right'}}>
        欢迎笑笑回来
        <Dropdown
          menu={{items}}
        >
          <Avatar size={48} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </Header>
  )
}
