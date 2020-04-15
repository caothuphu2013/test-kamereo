import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';
import { Modal, Row, Col, Form } from 'antd';
import { get as _get } from 'lodash';
import { storesActions, redInvoicesActions } from '../../redux/actions';
import FormUploadImage from './FormUploadImage';
import FormStoreInfo from './FormStoreInfo';
import './styles.scss';

const ModalStoreProfile = (props) => {
  const { onRemove, form, store, redInvoice, storeActions, redInvoiceActions, errorStore, errorRedInvoice } = props;
  const { getFieldDecorator } = form;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (errorStore) {
      toast(errorStore.message);
    }
  }, [errorStore]);

  useEffect(() => {
    if (errorRedInvoice) {
      toast(errorRedInvoice.message);
    }
  }, [errorRedInvoice]);

  const handleOk = () => {
    setVisible(false);
    onRemove();
  };

  const handleCancel = () => {
    setVisible(false);
    onRemove();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        storeActions.updateStoreByIdRequest({
          id: store.id,
          options: {
            name: _get(values, 'store_name', ''),
            address: _get(values, 'store_address', ''),
            city: _get(values, 'store_city', ''),
            state: _get(values, 'store_state', ''),
            phone: _get(values, 'phone', ''),
            logoURL: _get(values, 'store_logo.thumbUrl', '')
          }
        });

        redInvoiceActions.updateRedInvoiceByIdRequest({
          id: redInvoice.id,
          options: {
            name: _get(values, 'red_invoice_company_name', ''),
            address: _get(values, 'red_invoice_address', ''),
            city: _get(values, 'red_invoice_city', ''),
            state: _get(values, 'red_invoice_state', ''),
            taxCode: _get(values, 'red_invoice_taxCode', 0)
          }
        });
      }

      setVisible(false);
      onRemove();
    });
  };

  return (
    <Modal title="Edit Profile" visible={visible} width="90%" centered footer={null} onCancel={handleCancel}>
      <Form onSubmit={handleSubmit}>
        <Row type="flex" justify="space-between">
          <Col span={9}>
            <FormUploadImage getFieldDecorator={getFieldDecorator} logoURL={store.logoURL} />
          </Col>
          <Col span={14} className="info-container">
            <FormStoreInfo getFieldDecorator={getFieldDecorator} store={store} redInvoice={redInvoice} onOk={handleOk} onCancel={handleCancel} />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  store: state.StoresReducer.store,
  redInvoice: state.RedInvoicesReducer.redInvoice,
  errorStore: state.StoresReducer.error,
  errorRedInvoice: state.RedInvoicesReducer.error
});

const mapDispatchToProps = (dispatch) => ({
  storeActions: bindActionCreators(storesActions, dispatch),
  redInvoiceActions: bindActionCreators(redInvoicesActions, dispatch)
});

ModalStoreProfile.propTypes = {
  onRemove: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ModalStoreProfile));
