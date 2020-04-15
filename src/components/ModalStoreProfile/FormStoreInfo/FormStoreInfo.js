import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form, Button, Input, Select } from 'antd';
import { get as _get } from 'lodash';
import { isValidPhone } from '../../../utils/validation';
import { getStateOptions, getCityOptions, getStreetAddressByAddress } from '../../../utils/location';
import './styles.scss';

const FormStoreInfo = (props) => {
  const { store, redInvoice, getFieldDecorator, onSave, onCancel } = props;

  return (
    <div className="form-store-info">
      <div className="form-store-info__basic">
        <strong className="form-store-info__basic__title">Basic Info .</strong>
        <Form.Item label="Store Name">
          {getFieldDecorator('store_name', {
            initialValue: _get(store, 'name', ''),
            rules: [
              {
                required: true,
                message: 'Please input your store name!'
              }
            ]
          })(<Input placeholder="Name" />)}
        </Form.Item>
        <Form.Item label="Store Address" hasFeedback>
          <Row type="flex" justify="space-between">
            <Col span={10}>
              <Form.Item>
                {getFieldDecorator('store_address', {
                  initialValue: getStreetAddressByAddress(_get(store, 'address', '')),
                  rules: [
                    {
                      required: true,
                      message: 'Please input your store address!'
                    }
                  ]
                })(<Input placeholder="Address" />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                {getFieldDecorator('store_city', {
                  initialValue: store.city
                })(<Select placeholder="store city">{getCityOptions(_get(store, 'state', ''))}</Select>)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                {getFieldDecorator('store_state', {
                  initialValue: store.state
                })(<Select placeholder="store state">{getStateOptions()}</Select>)}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="Phone #">
          {getFieldDecorator('phone', {
            initialValue: _get(store, 'phone', ''),
            rules: [
              {
                required: true,
                message: 'Please input your phone number!'
              },
              {
                validator: (rule, value, callback) => {
                  if (isValidPhone(value)) {
                    callback();
                  } else {
                    callback('Not valid phone');
                  }
                }
              }
            ]
          })(<Input placeholder="Phone" />)}
        </Form.Item>
      </div>
      <div className="form-store-info__red-invoice">
        <strong className="form-store-info__red-invoice__title">Red invoice .</strong>
        <Form.Item label="Company Name">
          {getFieldDecorator('red_invoice_company_name', {
            initialValue: _get(redInvoice, 'name', ''),
            rules: [
              {
                required: true,
                message: 'Please input your company name!'
              }
            ]
          })(<Input placeholder="Company Name" />)}
        </Form.Item>
        <Form.Item label="Company Address">
          <Row type="flex" justify="space-between">
            <Col span={10}>
              <Form.Item>
                {getFieldDecorator('red_invoice_address', {
                  initialValue: getStreetAddressByAddress(_get(redInvoice, 'address', '')),
                  rules: [
                    {
                      required: true,
                      message: 'Please input your store address!'
                    }
                  ]
                })(<Input placeholder="Address" />)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                {getFieldDecorator('red_invoice_city', {
                  initialValue: redInvoice.city
                })(<Select placeholder="red invoice city">{getCityOptions(_get(redInvoice, 'state', ''))}</Select>)}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                {getFieldDecorator('red_invoice_state', {
                  initialValue: redInvoice.state
                })(<Select placeholder="red invoice state">{getStateOptions()}</Select>)}
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label="MST">
          {getFieldDecorator('red_invoice_taxCode', {
            initialValue: _get(redInvoice, 'taxCode', ''),
            rules: [
              {
                required: true,
                message: 'Please input your mst!'
              }
            ]
          })(<Input placeholder="MST" />)}
        </Form.Item>
      </div>
      <div className="form-store-info__actions">
        <Form.Item>
          <Button className="form-store-info__actions__btn-save" htmlType="submit" onClick={onSave}>
            Save
          </Button>
        </Form.Item>
        <Form.Item>
          <Button className="form-store-info__actions__btn-cancel" onClick={onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </div>
    </div>
  );
};

FormStoreInfo.propTypes = {
  store: PropTypes.object,
  redInvoice: PropTypes.object,
  getFieldDecorator: PropTypes.func.isRequired,
  onSave: PropTypes.func,
  onCancel: PropTypes.func
};

FormStoreInfo.defaultProps = {
  store: {},
  redInvoice: {},
  onSave: () => {},
  onCancel: () => {}
};

export default FormStoreInfo;
