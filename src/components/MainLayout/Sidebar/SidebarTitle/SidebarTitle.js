import React from 'react';
import { Row, Col } from 'antd';

import './styles.scss';

const SidebarTitle = () => (
  <div className="sidebar-title">
    <Row type="flex" align="middle" className="sidebar-title__info">
      <Col span={12}>
        <img alt="kamereo-title-logo" className="sidebar-title__logo" src="https://lh3.googleusercontent.com/DTaZtC7R_yjYJk7U8cdjSIjgb0pKTwFKrMiRZyXr6t11ljezXxuqczg2JnDwXjhiybw" />
      </Col>
      <Col span={12}>
        <strong>KAMEREO</strong> <br />
        <small>135 Hai Ba Trung</small>
      </Col>
    </Row>
    <Row type="flex">
      <Col offset={12}>
        <span className="btn-change-store">Change Store</span>
      </Col>
    </Row>
  </div>
);

export default SidebarTitle;
