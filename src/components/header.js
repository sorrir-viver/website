import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Menu, Dropdown, Icon, Avatar, Badge } from 'antd';
import sorrirViverLogo from '../assets/img/sorrir-viver-logotipo.png';

import utility from '@ciro-maciel/utility';

export default function(props) {
  const user = JSON.parse(utility.navigator.cookie.get('user'));
  return (
    <Row
      type="flex"
      justify="center"
      style={{
        borderBottom: '1px solid #ddd',
        height: '60px',
        width: '100%',
        padding: '0 10px',
      }}>
      <Row style={{ width: '1200px', padding: '10px 0', alignItems: 'center', display: 'flex' }}>
        <Col span={24} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontSize: '16px' }}>
            <Link to="/">
              <img
                src={sorrirViverLogo}
                alt="Sorrir & Viver - Estratégia Tecnologia Bem Estar"
                style={{ width: '33px' }}
              />
              <strong className="hide-on-mobile" style={{ color: '#1890ff', paddingLeft: '10px' }}>
                Sorrir & Viver
              </strong>
            </Link>
          </div>

          <div style={{ marginLeft: 'auto' }}>
            <Link to="/" style={{ margin: '0 10px' }}>
              <strong style={{ color: '#1890ff' }}>Contato</strong>
            </Link>
            <Link to="/" style={{ marginLeft: '10px' }}>
              <strong style={{ color: '#1890ff' }}>Sobre</strong>
            </Link>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
