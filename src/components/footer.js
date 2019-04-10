import React from 'react';

import { Row, Col } from 'antd';

export default function(props) {
  return (
    <Row
      type="flex"
      justify="center"
      position="static"
      style={{
        borderTop: '1px solid #ddd',
        height: '40px',
        width: '100%',
        padding: '0 10px',
      }}>
      <Row style={{ width: '1200px', padding: '10px 0', alignItems: 'center', display: 'flex' }}>
        <Col span={24} style={{ alignItems: 'center', display: 'flex' }}>
          <div>
            <a href="https://www.instagram.com/sorrir.viver/" target="_blank">
              Instagram
            </a>
            &nbsp;
            <a href="https://www.facebook.com/sorrir.viver" target="_blank">
              Facebook
            </a>
          </div>
          <div style={{ marginLeft: 'auto', fontSize: '11px' }}>
            <strong>Sorrir & Viver - {new Date().getFullYear()} &copy; + &reg;</strong>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
