import React from 'react'
import { Layout, Menu, } from 'antd';
import './SideMenu.css'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
const {  Sider } = Layout;
export default function SideMenu() {
  return (
    // 选中后 f12 查看源码
    <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" >全球新闻发布管理系统</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}
