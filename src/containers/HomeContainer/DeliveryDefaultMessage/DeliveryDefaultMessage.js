import React from 'react';
import { Checkbox, Input, Row, Col, Button } from 'antd';
import './styles.scss';
const { TextArea } = Input;

const DeliveryDefaultMessage = () => (
  <div className="delivery-default-container">
    <strong className="delivery-default-container__title">Delivery Default Message</strong>
    <Row type="flex" className="delivery-default-container__item">
      <Col span={2}>
        <Checkbox />
      </Col>
      <Col span={22}>
        <TextArea
          value="Paul Rand once said, 'The public is more familiar with bad fucking design good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threating, the old reassuring.' Design"
          placeholder="Write your message"
          autoSize={{ minRows: 1, maxRows: 5 }}
          allowClear
        />
      </Col>
    </Row>
    <Row type="flex" className="delivery-default-container__item">
      <Col span={2}>
        <Checkbox />
      </Col>
      <Col span={22}>
        <TextArea placeholder="Write your message" autoSize={{ minRows: 1, maxRows: 5 }} allowClear />
      </Col>
    </Row>
    <Row type="flex" className="delivery-default-container__item">
      <Col span={2}>
        <Checkbox />
      </Col>
      <Col span={22}>
        <TextArea placeholder="Write your message" autoSize={{ minRows: 1, maxRows: 5 }} allowClear />
      </Col>
    </Row>
    <Row type="flex" className="delivery-default-container__item">
      <Col span={2}>
        <Checkbox />
      </Col>
      <Col span={22}>
        <TextArea placeholder="Write your message" autoSize={{ minRows: 1, maxRows: 5 }} allowClear />
      </Col>
    </Row>
    <Button className="btn-update-message">Update</Button>
  </div>
);

export default DeliveryDefaultMessage;
