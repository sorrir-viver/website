import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Form, Button, Select, Input, Icon, InputNumber, Modal } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

class modalInformation extends React.Component {
  state = {
    loading: false,
    action: 'Realizar minha Pesquisar',
    disabled: false,
  };

  onSubmit(form) {
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const self = this;
        self.setState({ loading: true, action: 'Enviando Pesquisa...' });

        const edgar = new Promise((resolve, reject) => {
          setTimeout(function() {
            resolve(true);
            // reject('error');
          }, 5000);
        });

        edgar.then(
          (value) => {
            self.setState({ loading: false, disabled: true, action: 'Pesquisa enviada com Sucesso!' });

            setTimeout(() => {
              self.props.onClose();
              form.resetFields();
              self.setState({ loading: false, action: 'Realizar minha Pesquisar', disabled: false });
            }, 2000);
          },
          (reason) => {
            console.log(reason);
          }
        );
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading, action, disabled } = this.state;
    const { visible } = this.props;

    return (
      <Modal
        closable={false}
        title="Formulario de Pesquisa"
        visible={visible}
        footer={[
          <Button key="submit" htmlType="submit" icon="check" type="primary" disabled={disabled} loading={loading} form="myForm">
            {action}
          </Button>,
        ]}>
        <Form
          id="myForm"
          onSubmit={(e) => {
            e.preventDefault();
            this.onSubmit(this.props.form);
          }}>
          <Row>
            <Col span={12} style={{ paddingRight: '5px' }}>
              <Form.Item>
                {getFieldDecorator('nameFirst', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="user" />} placeholder="Nome" onChange={(e) => this.setState({ nameFirst: e.target.value })} />)}
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingLeft: '5px' }}>
              <Form.Item>
                {getFieldDecorator('nameLast', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="user" />} placeholder="Sobrenome" onChange={(e) => this.setState({ nameLast: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="mail" />} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingRight: '5px' }}>
              <Form.Item>
                {getFieldDecorator('brandName', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="shop" />} placeholder="Nome da Marca" onChange={(e) => this.setState({ brandName: e.target.value })} />)}
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingLeft: '5px' }}>
              <Form.Item>
                {getFieldDecorator('brandActive', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="appstore" />} placeholder="Ramo de Atividade" onChange={(e) => this.setState({ brandActive: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={12} style={{ paddingRight: '5px' }}>
              <Form.Item>
                {getFieldDecorator('mobileNumber', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="phone" />} placeholder="DDD + Telefone Celular" onChange={(e) => this.setState({ mobileNumber: e.target.value })} />)}
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingLeft: '5px' }}>
              <Form.Item>
                {getFieldDecorator('fixedNumber', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="phone" />} placeholder="DDD + Telefone Fixo" onChange={(e) => this.setState({ fixedNumber: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={24} style={{ textAlign: 'center' }}>
              <small>
                Ao clicar em <strong>Realizar minha Pesquisar</strong> conta, você concorda com nossos Termos de Uso, nossa Política de Privacidade, incluindo o Uso de Cookies.
              </small>
            </Col>
          </Row>
        </Form>
      </Modal>
    );
  }
}

export default Form.create({ name: 'modalInformation' })(modalInformation);
