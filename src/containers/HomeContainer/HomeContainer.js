import React from 'react';
import { Row, Col } from 'antd';
import { ToastContainer } from 'react-toastify';
import MainLayout from '../../components/MainLayout';
import StoreInformationDetail from './StoreInformationDetail';
import DeliveryDefaultMessage from './DeliveryDefaultMessage';
import './styles.scss';

const HomePage = () => (
  <MainLayout>
    <ToastContainer />
    <div className="home-container">
      <div className="home-container__title">
        <span>Store Information</span>
        <div className="line"></div>
      </div>
      <Row type="flex" justify="space-between">
        <Col span={8}>
          <StoreInformationDetail />
        </Col>
        <Col span={15}>
          <DeliveryDefaultMessage />
        </Col>
      </Row>
    </div>
  </MainLayout>
);

export default HomePage;
