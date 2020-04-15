import React from 'react';
import { Select } from 'antd';
import { isEmpty as _isEmpty } from 'lodash';
import { STATES_CITIES_US } from '../constants/configs';

export const getStateOptions = () =>
  Object.entries(STATES_CITIES_US).map(([key]) => (
    <Select.Option key={key} value={key}>
      {key}
    </Select.Option>
  ));

export const getCityOptions = (state) =>
  STATES_CITIES_US[state].map((city) => (
    <Select.Option key={city} value={city}>
      {city}
    </Select.Option>
  ));

export const getStreetAddressByAddress = (address) => (!_isEmpty(address.split(',')) ? address.split(',')[0] : '');
