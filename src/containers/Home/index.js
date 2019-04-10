import React from 'react';
import { Row, Col, Breadcrumb, Icon, Input } from 'antd';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';

export default (props) => [
  <Header key="h" {...props} />,
  <Body key="b">
    <Row style={{ width: '1200px', padding: '10px' }}>hi-001</Row>
  </Body>,
  <Footer key="f" />,
];
