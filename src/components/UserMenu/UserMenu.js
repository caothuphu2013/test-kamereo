import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Avatar, Menu, Dropdown, Typography } from 'antd';

import './styles.scss';

const UserMenu = ({ name, history, avatarSrc, ...restProps }) => (
  <Dropdown
    {...restProps}
    trigger={['click']}
    overlay={
      <Menu className="dropdown-menu-overlay">
        <Menu.Item onClick={() => history.push('/logout')}>Logout</Menu.Item>
      </Menu>
    }
    placement="bottomRight"
    className="user-menu"
  >
    <div>
      <Avatar icon="user" src={avatarSrc} className="user-menu__avatar" />
      <Typography.Text>Thoai Huynh</Typography.Text>
    </div>
  </Dropdown>
);

UserMenu.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  avatarSrc: PropTypes.string
};
UserMenu.defaultProps = {
  avatarSrc: ''
};

export default withRouter(UserMenu);
