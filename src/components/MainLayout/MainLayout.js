import React from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Sidebar from './Sidebar';
import './styles.scss';

const MainLayout = (props) => (
  <Layout className="main-layout">
    <Layout.Header className="main-layout__header">
      <Header />
    </Layout.Header>
    <Layout>
      <Layout.Sider width={200} style={{ background: '#fff' }}>
        <Sidebar />
      </Layout.Sider>
      <Layout.Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        {props.children}
      </Layout.Content>
    </Layout>
  </Layout>
);

export default MainLayout;
