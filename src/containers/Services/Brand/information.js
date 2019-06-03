import React from 'react';
import { Row, Col, Form, Button, Input, Icon, InputNumber, Modal } from 'antd';

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
        const { brandName, brandActivity, nameComplete, mobileNumber, email } = self.state;

        self.setState({ loading: true, action: 'Enviando Pesquisa...' });

        const edgar = new Promise((resolve, reject) => {
          fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              service_id: 'amazon_ses',
              template_id: 'template_4KsrVQ06',
              user_id: 'user_GNJrmgrXvk9f9ZtPKUEEc',
              template_params: {
                brandName: brandName,
                brandActivity: brandActivity,
                nameComplete: nameComplete,
                mobileNumber: mobileNumber,
                email: email,
              },
            }),
          }).then(
            (response) => {
              resolve(response);
            },
            (error) => {
              reject(error);
            }
          );
        });

        edgar.then(
          (response) => {
            self.setState({ loading: false, disabled: true, action: 'Pesquisa enviada com Sucesso!' });

            setTimeout(() => {
              self.props.onClose();
              form.resetFields();
              self.setState({ loading: false, action: 'Realizar minha Pesquisar', disabled: false });
            }, 2000);
          },
          (error) => {
            console.log(error);
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
        centered={true}
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
            <Col span={14} style={{ paddingRight: '5px' }}>
              <Form.Item>
                {getFieldDecorator('brandName', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="shop" />} placeholder="Nome da Marca" onChange={(e) => this.setState({ brandName: e.target.value })} />)}
              </Form.Item>
            </Col>
            <Col span={10} style={{ paddingLeft: '5px' }}>
              <Form.Item>
                {getFieldDecorator('brandActivity', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="appstore" />} placeholder="Ramo de Atividade" onChange={(e) => this.setState({ brandActivity: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                {getFieldDecorator('nameComplete', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="user" />} placeholder="seu Nome" onChange={(e) => this.setState({ nameComplete: e.target.value })} />)}
              </Form.Item>
            </Col>
            <Col span={12} style={{ paddingLeft: '5px' }}>
              <Form.Item>
                {getFieldDecorator('mobileNumber', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="phone" />} placeholder="DDD + WhatsApp" onChange={(e) => this.setState({ mobileNumber: e.target.value })} />)}
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Este campo é necessário' }],
                })(<Input type="text" prefix={<Icon type="mail" />} placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />)}
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
