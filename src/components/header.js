import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Menu, Dropdown, Icon, Button, Badge } from 'antd';
import logoSorrirViver from '../assets/img/logo-sorrir-viver.png';
import logoOdontology from '../assets/img/logo-odontology.png';
import logoHof from '../assets/img/logo-hof.png';

import utility from '@ciro-maciel/utility';

const menuUSer = (props, user) => {
  return (
    <Menu mode="vertical">
      {user &&
        user.clinic.length > 0 && [
          <Menu.ItemGroup key="1" title="Perfis de Acesso" style={{ display: 'list-item', fontWeight: 'bold' }}>
            {user.clinic[0].team.map((team) => {
              return (
                <Menu.Item key={new Date().getTime()}>
                  <Icon type="user" />
                  {team.type === 'administrator' && <span>Administrador(a)</span>}
                  {team.type === 'dentist' && <span>Dentista</span>}
                  {team.type === 'secretary' && <span>Secretária(o)</span>}
                </Menu.Item>
              );
            })}
          </Menu.ItemGroup>,
          <Menu.Divider key="1Q" />,
        ]}

      <Menu.Item key="14">
        <Icon type="setting" />
        Configurações
      </Menu.Item>
      <Menu.Item key="22">
        <Icon type="lock" />
        Histórico de Acessos
      </Menu.Item>
      <Menu.Item key="212">
        <Icon type="mail" />
        Mensagens &ensp;
        <Badge count={19} />
      </Menu.Item>
      <Menu.Item key="53">
        <Icon type="question" />
        <a href="https://support.sorrir-viver.com.br/odontology" target="_blank">
          Ajuda
        </a>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item
        key="83"
        onClick={(e) => {
          var domain = window.location.hostname === 'localhost' ? 'localhost' : 'sorrir-viver.com.br';

          utility.navigator.cookie.remove('user', '/', domain);
          utility.navigator.cookie.remove('token', '/', domain);

          props.history.push('/signin');
        }}>
        <Icon type="logout" />
        <Link to="/signin">Sair</Link>
      </Menu.Item>
      <Menu.Divider />

      <Menu.Item key="3">
        <a href="https://sorrir-viver.com.br/about" target="_blank">
          Sobre a Sorrir & Viver
        </a>
      </Menu.Item>
    </Menu>
  );
};

const menuServices = (props, user) => {
  return (
    <Menu>
      <Menu.ItemGroup key="1" title="Conhceça nossos Serviços" style={{ display: 'list-item', fontWeight: 'bold' }}>
        <Menu.Item key="14">
          <Link to="/services/brand">
            <Icon type="copyright" style={{ verticalAlign: '-2px', marginRight: '5px' }} />
            <span>Registro de sua Marca</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="22">
          <Link to="/services/pricing">
            <Icon type="dollar" style={{ verticalAlign: '-2px', marginRight: '5px' }} />
            <span>Precificação de seus Serviços</span>
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};

const menuSoftwares = (props, user) => {
  return (
    <Menu>
      <Menu.ItemGroup key="1" title="Quer impulsionar seu Negócio?" style={{ display: 'list-item', fontWeight: 'bold' }}>
        <Menu.Item key="14">
          <Link to="/softwares/odontology">
            <img src={logoOdontology} style={{ width: '16px', marginRight: '5px' }} />
            <span>Odontology</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="22">
          <Link to="/softwares/hof">
            <img src={logoHof} style={{ width: '16px', marginRight: '5px' }} />
            <span>Harmonização Orofacial</span>
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );
};
const menuMobile = (props, user) => {
  return (
    <Menu>
      <Menu.ItemGroup key="11" title="Conhceça nossos Serviços" style={{ display: 'list-item', fontWeight: 'bold' }}>
        <Menu.Item key="14">
          <Link to="/services/brand">
            <Icon type="copyright" style={{ verticalAlign: '-2px', marginRight: '5px' }} />
            <span>Registro de sua Marca</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="22">
          <Link to="/services/pricing">
            <Icon type="dollar" style={{ verticalAlign: '-2px', marginRight: '5px' }} />
            <span>Precificação de seus Serviços</span>
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.ItemGroup key="121" title="Impulsione seu Negócio!" style={{ display: 'list-item', fontWeight: 'bold' }}>
        <Menu.Item key="194">
          <Link to="/softwares/odontology">
            <img src={logoOdontology} style={{ width: '16px', marginRight: '5px' }} />
            <span>Odontology</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="212">
          <Link to="/softwares/hof">
            <img src={logoHof} style={{ width: '16px', marginRight: '5px' }} />
            <span>Harmonização Orofacial</span>
          </Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item key="282">
        <Link to="/contact">
          <span>Contato</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="242">
        <Link to="/about">
          <span>Sobre</span>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

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
          <Link to="/" style={{ fontSize: '20px', marginRight: '10px' }}>
            <img src={logoSorrirViver} alt="Sorrir & Viver - Estratégia Tecnologia Bem Estar" style={{ width: '33px' }} />
            <strong className="hide-on-xs" style={{ color: '#1890ff', paddingLeft: '10px' }}>
              Sorrir & Viver
            </strong>
          </Link>

          <div className="hide-on-md">
            <div style={{ margin: '0 10px', display: 'inline' }}>
              <Dropdown overlay={menuServices(props, user)}>
                <div style={{ cursor: 'pointer', display: 'inline' }}>
                  <strong className="link" style={{ fontSize: '16px' }}>
                    Serviços <Icon type="down" style={{ fontSize: '10px' }} />
                  </strong>
                </div>
              </Dropdown>
            </div>
            <div style={{ margin: '0 10px', display: 'inline' }}>
              <Dropdown overlay={menuSoftwares(props, user)}>
                <div style={{ cursor: 'pointer', display: 'inline' }}>
                  <strong className="link" style={{ fontSize: '16px' }}>
                    Softwares <Icon type="down" style={{ fontSize: '10px' }} />
                  </strong>
                </div>
              </Dropdown>
            </div>
            <Link to="/contact" style={{ margin: '0 10px' }}>
              <strong style={{ fontSize: '16px' }}>Contato</strong>
            </Link>
            <Link to="/about" style={{ margin: '0 10px' }}>
              <strong style={{ fontSize: '16px' }}>Sobre</strong>
            </Link>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ display: 'inline-block', marginLeft: '5px' }}>
              <a href="https://account.sorrir-viver.com.br/signin?continue=/https%3A%2F%2Fsorrir-viver.com.br" style={{ marginRight: '5px' }}>
                <strong style={{ color: '#1890ff', fontSize: '16px' }}>Entre</strong>
              </a>
              <span>ou</span>
              <a href="https://account.sorrir-viver.com.br/signup?continue=/https%3A%2F%2Fsorrir-viver.com.br" style={{ marginLeft: '5px' }}>
                <strong style={{ color: '#1890ff', fontSize: '16px' }}>Cadastre-se</strong>
              </a>

              {/* <Dropdown overlay={menuUSer(props, user)} trigger={['click']} placement="bottomRight">
                <div style={{ cursor: 'pointer' }}>
                  <Badge dot>
                    <Avatar shape="square" icon="user" size="small" />
                  </Badge>
                  &ensp;
                  <Link
                    to=""
                    onClick={(e) => {
                      e.preventDefault();
                    }}>
                    <span className="hide-on-xs">
                      Andréa Fabiana de Oliveira <Icon className="hide-on-xs" type="caret-down" />
                    </span>
                  </Link>
                </div> 
              </Dropdown> */}
              <div className="show-on-md" style={{ cursor: 'pointer', display: 'none', marginLeft: '10px' }}>
                <Dropdown overlay={menuMobile(props, user)} trigger={['click']} placement="bottomRight">
                  <Button icon="more" />
                </Dropdown>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
