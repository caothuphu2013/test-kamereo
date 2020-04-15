import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';

import withModal from './hoc/withModals';
import HomeContainer from './containers/HomeContainer';

const App = () => (
  <Suspense fallback={<Spin />}>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </Suspense>
);

export default withModal(App);
