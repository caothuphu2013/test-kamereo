import React from 'react';
import { Menu, Icon } from 'antd';
import './styles.scss';

const { SubMenu } = Menu;

const SidebarMenu = () => (
  <Menu className="sidebar-menu" mode="inline" defaultSelectedKeys={['overview']} defaultOpenKeys={['dashboard']} style={{ height: '100vh' }}>
    <Menu.Item key="favorite" className="favorites-items">
      <span>
        <Icon type="heart" />
        Favorites Items
      </span>
    </Menu.Item>
    <SubMenu key="dashboard" title={<span>Dashboard</span>}>
      <Menu.Item key="overview">
        <Icon type="dashboard" />
        Overview
      </Menu.Item>
      <Menu.Item key="orders">
        <Icon type="unordered-list" />
        Orders
      </Menu.Item>
      <Menu.Item key="supplier_list">
        <Icon type="car" />
        Supplier List
      </Menu.Item>
      <Menu.Item key="statistic">
        <Icon type="area-chart" />
        Statistic
      </Menu.Item>
    </SubMenu>
    <SubMenu key="market_place" title={<span>Market Place</span>}>
      <Menu.Item key="market">
        <Icon type="shop" />
        Market
      </Menu.Item>
    </SubMenu>
    <SubMenu key="general_settings" title={<span>General Settings</span>}>
      <Menu.Item key="company_info">
        <Icon type="bank" />
        Company info
      </Menu.Item>
      <Menu.Item key="store_info">
        <Icon type="appstore" />
        Store info
      </Menu.Item>
      <Menu.Item key="user_management">
        <Icon type="usergroup-add" />
        User Management
      </Menu.Item>
    </SubMenu>
  </Menu>
);

export default SidebarMenu;
