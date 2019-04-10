import React from 'react';
import { Row, Col, Typography } from 'antd';

import homeMarca from '../../assets/img/home-marca.svg';
import homeServico from '../../assets/img/home-servico.svg';
import homeOrofacial from '../../assets/img/home-orofacial.svg';
import homeGerenciamento from '../../assets/img/home-gerenciamento.svg';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';

export default (props) => [
  <Header key="h" {...props} />,
  <Body key="b">
    <Row style={{ width: '1200px', padding: '10px' }}>
      <Row type="flex">
        <Col span={24} style={{ textAlign: 'center', margin: '30px 0px' }}>
          <Typography.Title level={2} style={{color: "#676c53f3"}}>
            Descubra como nós da <br />
            <span style={{ fontSize: '30px' }}>Sorrir & Viver</span> <br />
            podemos transformar seu desempenho nos <br />
            Negócios... e Vida...
          </Typography.Title>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Col xs={24} md={12} style={{ textAlign: 'center', padding: '30px 0' }}>
            <div>
              <Typography.Title level={3}>Registre sua Marca</Typography.Title>
              <p style={{ fontSize: '16px' }}>
                Proteja a identidade de seu Empresa <br />
                por todo o território nacional
              </p>
            </div>
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              height: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={homeMarca} />
          </Col>
        </Col>
        <Col span={24} style={{ backgroundColor: 'rgb(247, 247, 247)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Col xs={24} md={12} style={{ textAlign: 'center', height: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={homeServico} />
          </Col>
          <Col xs={24} md={12} style={{ textAlign: 'center', padding: '30px 0' }}>
            <div>
              <Typography.Title level={3}>Aprenda a calcular o preço de seus Serviços</Typography.Title>
              <p style={{ fontSize: '16px' }}>
                Trabalhando muito <br />e sempre apertado com dinheiro?
              </p>
            </div>
          </Col>
        </Col>
        <Col span={24} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Col xs={24} md={12} style={{ textAlign: 'center', padding: '30px 0' }}>
            <div>
              <Typography.Title level={3}>
                Atendendo pacientes de <br />
                Harmonização Orofacial?
              </Typography.Title>
              <p style={{ fontSize: '16px' }}>
                É hora de você conhecer a forma como
                <br />
                documentamos tudo!
              </p>
            </div>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: 'center', height: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={homeOrofacial} />
          </Col>
        </Col>
        <Col span={24} style={{ backgroundColor: 'rgb(247, 247, 247)', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Col xs={24} md={12} style={{ textAlign: 'center', height: '380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={homeGerenciamento} />
          </Col>
          <Col xs={24} md={12} style={{ textAlign: 'center', padding: '30px 0' }}>
            <div>
              <Typography.Title level={3}>
                Quer automatizar o Gerenciamento <br />
                de sua Clínica e Impulsionar seu Negócio?
              </Typography.Title>
              <p style={{ fontSize: '16px' }}>
                Então conheça nosso Software focado em estratégias
                <br />
                de relacionamento e fidelização de pacientes
              </p>
            </div>
          </Col>
        </Col>
      </Row>
    </Row>
  </Body>,
  <Footer key="f" />,
];
