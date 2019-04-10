import React from 'react';
import { Row, Col, Typography } from 'antd';

import homeOrofacial from '../../assets/img/home-orofacial.png';

import Header from '../../components/header';
import Body from '../../components/body';
import Footer from '../../components/footer';

export default (props) => [
  <Header key="h" {...props} />,
  <Body key="b">
    <Row style={{ width: '1200px', padding: '10px' }}>
      <Row type="flex">
        <Col span={24} style={{ textAlign: 'center', margin: '30px 0px' }}>
          <Typography.Title level={2}>
            Descubra como nós da Sorrir & Viver <br />
            podemos transformar seu desempenho nos <br />
            Negócios... e Vida...
          </Typography.Title>
        </Col>
        <Col span={24}>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
              height: '450px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={homeOrofacial} />
          </Col>
        </Col>
        <Col
          span={24}
          style={{
            backgroundColor: 'rgb(247, 247, 247)',
          }}>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            wqwqw
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <div>
              <Typography.Title level={3}>Aprenda a calcular o preço de seus Serviços</Typography.Title>
              <p style={{ fontSize: '16px' }}>
                Trabalhando muito <br />e sempre apertado com dinheiro?
              </p>
            </div>
          </Col>
        </Col>
        <Col span={24} style={{ height: '450px' }}>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <img src={homeOrofacial} />
          </Col>
        </Col>
        <Col span={24} style={{ backgroundColor: 'rgb(247, 247, 247)', height: '450px' }}>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            wqwqw
          </Col>
          <Col
            xs={24}
            md={12}
            style={{
              textAlign: 'center',
              height: '450px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
