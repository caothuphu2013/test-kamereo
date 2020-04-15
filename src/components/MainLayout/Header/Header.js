import React from 'react';
import { Menu, Icon, Select } from 'antd';
import UserMenu from '../../UserMenu';
import Logo from '../../Logo';
import './styles.scss';

const { Option } = Select;

const Header = () => (
  <div className="header">
    <Logo />
    <Menu className="header__menu" theme="light" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '62px' }}>
      <Menu.Item key="1">
        <Icon type="mail" />
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="shopping-cart" />
      </Menu.Item>
      <Menu.Item key="3" className="header__menu__languages">
        <Select defaultValue="eng">
          <Option value="eng">ENG</Option>
          <Option value="vni">VN</Option>
        </Select>
      </Menu.Item>
      <Menu.Item className="header__menu__user-menu">
        <UserMenu />
      </Menu.Item>
    </Menu>
  </div>
);

export default Header;
