import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Upload, Icon, Button, Row, Col } from 'antd';
import { getBase64 } from '../../../utils/image';
import { API_UPLOAD_IMAGE } from '../../../constants/configs';
import './styles.scss';

const FormUploadImage = (props) => {
  const { logoURL, getFieldDecorator } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(logoURL);

  const onChange = (info) => {
    if (info.file.status === 'uploading') {
      setImageUrl('');
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setLoading(false);
        setImageUrl(imageUrl);
      });
    }
  };

  const handleRemoveImage = () => {
    setLoading(false);
    setImageUrl('');
  };

  const previewImage = imageUrl ? (
    <img src={imageUrl} alt="avatar" />
  ) : (
    <div className="upload-button">
      <Icon type={loading ? 'loading' : 'plus'} style={{ fontSize: '60px' }} />
    </div>
  );

  return (
    <div className="upload-image">
      <strong className="upload-image__title">Store Image .</strong>
      <div className="upload-image__preview">{previewImage}</div>
      <Row className="upload-image__actions" type="flex" justify="end">
        <Col span={6}>
          <Form.Item>
            <Button className="upload-image__actions__btn-remove" onClick={handleRemoveImage}>
              <Icon type="delete" /> Remove
            </Button>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item>
            {getFieldDecorator('store_logo', {
              rules: [
                {
                  required: true,
                  message: 'Required',
                  type: 'object'
                }
              ],
              initialValue: {
                thumbUrl: logoURL
              },
              valuePropName: 'file',
              getValueFromEvent: (event) => event && event.file,
              onChange
            })(
              <Upload name="logo" action={API_UPLOAD_IMAGE} listType="picture">
                <Button className="upload-image__actions__btn-upload">
                  <Icon type="upload" /> Upload
                </Button>
              </Upload>
            )}
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};

FormUploadImage.propTypes = {
  logoURL: PropTypes.string,
  getFieldDecorator: PropTypes.func.isRequired
};

FormUploadImage.defaultProps = {
  logoURL: ''
};

export default FormUploadImage;
