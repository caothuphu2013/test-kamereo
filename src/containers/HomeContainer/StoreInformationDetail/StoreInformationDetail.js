import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col, Card } from 'antd';
import { toast } from 'react-toastify';
import { get as _get, isEmpty as _isEmpty } from 'lodash';
import { storesActions, redInvoicesActions } from '../../../redux/actions';
import ButtonEditProfile from '../../../components/Buttons/ButtonEditProfile';
import { CURRENT_STORE_ID } from '../../../constants/configs';
import './styles.scss';

const StoreInformationDetail = (props) => {
  const { store, redInvoice, storesActions, redInvoicesActions, errorStore, errorRedInvoice } = props;

  useEffect(() => {
    storesActions.fetchStoreByIdRequest(CURRENT_STORE_ID);
  }, []);

  useEffect(() => {
    if (!_isEmpty(store.redInvoice)) {
      redInvoicesActions.fetchRedInvoiceByIdRequest(store.redInvoice);
    }
  }, [store.redInvoice]);

  useEffect(() => {
    if (!_isEmpty(errorStore)) {
      toast(errorStore.message);
    }
  }, [errorStore]);

  useEffect(() => {
    if (!_isEmpty(errorRedInvoice)) {
      toast(errorRedInvoice.message);
    }
  }, [errorRedInvoice]);

  return (
    <Card className="store-information-detail" cover={<img alt="logo kamereo" src={store.logoURL} />} actions={[<ButtonEditProfile />]}>
      <div className="store-information-detail__main">
        <strong>Store info</strong>
        <Row type="flex">
          <Col span={9}>Name:</Col>
          <Col span={15}>{_get(store, 'name', '')}</Col>
        </Row>
        <Row type="flex">
          <Col span={9}>Address:</Col>
          <Col span={15}>{_get(store, 'address', '')}</Col>
        </Row>
        <Row type="flex">
          <Col span={9}>Phone:</Col>
          <Col span={15}>{_get(store, 'phone', '')}</Col>
        </Row>
      </div>
      <div className="store-information-detail__red-invoice">
        <strong>Red invoice info</strong>
        <Row type="flex">
          <Col span={9}>Company Name:</Col>
          <Col span={15}>{_get(redInvoice, 'name', '')}</Col>
        </Row>
        <Row type="flex">
          <Col span={9}>Address:</Col>
          <Col span={15}>{_get(redInvoice, 'address', '')}</Col>
        </Row>
        <Row type="flex">
          <Col span={9}>MST:</Col>
          <Col span={15}>{_get(redInvoice, 'taxCode', '')}</Col>
        </Row>
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => ({
  store: state.StoresReducer.store,
  redInvoice: state.RedInvoicesReducer.redInvoice,
  errorStore: state.StoresReducer.error,
  errorRedInvoice: state.RedInvoicesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  storesActions: bindActionCreators(storesActions, dispatch),
  redInvoicesActions: bindActionCreators(redInvoicesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreInformationDetail);
