import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import Header from '../../../components/header';
import Body from '../../../components/body';
import Footer from '../../../components/footer';

import brandMarca from '../../../assets/img/home-marca.svg';

export default (props) => [
  <Header key="h" {...props} />,
  <Body key="b">
    <Row style={{ width: '1200px', padding: '0 10px' }}>
      <Row type="flex">
        <Col span={24} style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgb(247, 247, 247)' }}>
          <Typography.Title level={1} className="no-margin" style={{ color: '#676c53f3' }}>
            <img src={brandMarca} style={{ height: '126px', paddingRight: '20px' }} /> Registre sua Marca
          </Typography.Title>
        </Col>
        <Col span={24} style={{ textAlign: 'center', padding: '10px' }}>
          <Typography.Title level={2} className="no-margin" style={{ color: '#676c53f3' }}>
            Faça agora mesmo <span style={{ fontSize: '28px' }}>gratuitamente</span> <br />
            a pesquisa de viabilidade <br />
            do nome da sua empresa
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
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Marca promove reconhecimento</Typography.Title>
            <Typography.Paragraph>
              As pessoas tendem a fazer negócios com empresas com as quais estão familiarizadas. Se o sua marca for consistente e fácil de reconhecer, ela pode ajudar as pessoas a
              se sentirem mais à vontade ao comprar seus produtos ou serviços.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Sua marca ajuda a diferenciar você da concorrência</Typography.Title>
            <Typography.Paragraph>
              No mercado global de hoje, é fundamental se destacar da multidão. Você não está mais competindo em um palco local, sua organização agora compete na economia global.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Sua marca informa sobre o DNA da sua empresa</Typography.Title>
            <Typography.Paragraph>
              Sua experiência completa com a marca, desde os elementos visuais, como o logotipo, até o modo como seus telefones são atendidos, informa ao cliente sobre o tipo de
              empresa que você é.
            </Typography.Paragraph>
          </Col>
          <Col span={24} />

          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Sua marca fornece motivação e direção para sua equipe</Typography.Title>
            <Typography.Paragraph>
              Uma estratégia de marca clara fornece a clareza que sua equipe precisa para ter sucesso. Ela diz a eles como agir, como vencer e como atingir os objetivos da
              organização.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Uma marca forte gera referências</Typography.Title>
            <Typography.Paragraph>
              As pessoas adoram contar aos outros sobre as marcas de que gostam. As pessoas usam marcas, comem marcas, ouvem marcas e estão constantemente falando aos outros sobre
              as marcas que amam. Por outro lado, você não pode contar a alguém sobre uma marca que você não consegue lembrar.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Uma marca forte ajuda os clientes a saberem o que esperar</Typography.Title>
            <Typography.Paragraph>
              É importante lembrar que sua marca representa você ... você é a marca, sua equipe é a marca, seus materiais de marketing são a marca.
            </Typography.Paragraph>
          </Col>
          <Col span={24} />

          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Sua marca ajuda você a criar clareza e manter o foco</Typography.Title>
            <Typography.Paragraph>
              É muito fácil passear de ideia em ideia sem nada para guiá-lo… não demorou muito para estar longe de suas metas ou planos originais. Uma estratégia de marca clara
              ajuda você a manter o foco em sua missão e visão como organização.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Sua marca ajuda a você se conectar emocionalmente com seus clientes</Typography.Title>
            <Typography.Paragraph>
              Uma boa marca se conecta com as pessoas em um nível emocional, elas se sentem bem quando compram a marca. A compra é uma experiência emocional e ter uma marca forte
              ajuda as pessoas a se sentirem bem em um nível emocional quando se envolvem com a empresa.
            </Typography.Paragraph>
          </Col>
          <Col
            xs={24}
            md={8}
            style={{
              textAlign: 'center',
              padding: '10px 20px',
            }}>
            <Typography.Title level={3}>Valor comercial</Typography.Title>
            <Typography.Paragraph>
              Uma marca forte fornecerá valor à sua organização além de seus ativos físicos, é um bem intangível, e entra no Balanço Patrimonial da sua empresa.
            </Typography.Paragraph>
          </Col>

          <Col span={24} style={{ margin: '0 0 40px', textAlign: 'center' }}>
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
