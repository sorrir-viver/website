import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import Header from '../../../components/header';
import Body from '../../../components/body';
import Footer from '../../../components/footer';

export default (props) => [
  <Header key="h" {...props} />,
  <Body key="b">
    <Row style={{ width: '1200px', padding: '0 10px' }}>
      <Row type="flex">
        <Col span={24} style={{ textAlign: 'center', padding: '10px 10px 40px', backgroundColor: 'rgb(247, 247, 247)' }}>
          <Typography.Title level={2} className="no-margin" style={{ color: '#676c53f3' }}>
            Registre sua <span style={{ fontSize: '33px' }}>Marca</span> <br />
            faça agora mesmo <br />
            <span style={{ fontSize: '28px' }}>gratuitamente</span> <br />
            a pesquisa de viabilidade <br />
            da sua empresa
          </Typography.Title>
          <Button type="primary" icon="search" style={{ fontSize: '30px', height: 'unset', marginTop: '20px', padding: '5px 25px' }}>
            Pesquisar
          </Button>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Col span={24} style={{ margin: '30px 0' }}>
            <Typography.Title level={3} className="no-margin" style={{ color: '#676c53f3', textAlign: 'center' }}>
              9 motivos para você cuidar ainda melhor da sua <span style={{ fontSize: '24px' }}>Marca</span>
            </Typography.Title>
          </Col>

          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            <Typography.Title level={3}>Oque é Marca?</Typography.Title>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography.Title level={3}>A importância da Marca</Typography.Title>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            <Typography.Title level={3}>Jucesp x Marca</Typography.Title>
          </Col>
          <Col span={24} />

          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography.Title level={3}>A importância do Registro</Typography.Title>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography.Title level={3}>Por que ter assesoria?</Typography.Title>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              height: '300px',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Typography.Title level={3}>Etapas</Typography.Title>
          </Col>
          <Col span={24} style={{ margin: '30px 0', textAlign: 'center' }}>
            <Button type="primary" icon="copyright" style={{ fontSize: '30px', height: 'unset', marginTop: '20px', padding: '10px 20px' }}>
              <span className="show-on-xs" style={{ display: 'none' }}>
                Registre agora!
              </span>
              <span className="hide-on-xs">&nbsp;Registre agora mesmo sua Marca!</span>
            </Button>
          </Col>
        </Col>
      </Row>
    </Row>
  </Body>,
  <Footer key="f" />,
];
