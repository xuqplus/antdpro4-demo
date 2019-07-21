import { Alert, Button, Form, Icon, Input } from 'antd'
import { FormattedMessage } from 'umi-plugin-react/locale'
import React, { Component } from 'react'

import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Dispatch } from 'redux'
import { FormComponentProps } from 'antd/es/form'
import Link from 'umi/link'
import { connect } from 'dva'
import { StateType } from './model'
import LoginComponents from './components/Login'
import styles from './style.less'

const {Tab, UserName, Password, Email, Captcha, Submit} = LoginComponents

interface PAGE_NAME_UPPER_CAMEL_CASEProps {
  dispatch: Dispatch<any>;
  BLOCK_NAME_CAMEL_CASE: StateType;
  submitting: boolean;
}

interface PAGE_NAME_UPPER_CAMEL_CASEState {
  type: string;
  autoLogin: boolean;
}

export interface FromDataType {
  userName: string;
  password: string;
  email: string;
  captcha: string;
}

@connect(
  ({
     BLOCK_NAME_CAMEL_CASE,
     loading,
   }: {
    BLOCK_NAME_CAMEL_CASE: StateType;
    loading: {
      effects: {
        [key: string]: string;
      };
    };
  }) => ({
    BLOCK_NAME_CAMEL_CASE,
    submitting: loading.effects['BLOCK_NAME_CAMEL_CASE/login'],
  }),
)
class PAGE_NAME_UPPER_CAMEL_CASE extends Component<PAGE_NAME_UPPER_CAMEL_CASEProps,
  PAGE_NAME_UPPER_CAMEL_CASEState> {
  loginForm: FormComponentProps['form'] | undefined | null = undefined

  state: PAGE_NAME_UPPER_CAMEL_CASEState = {
    type: 'account',
    autoLogin: true,
  }

  changeAutoLogin = (e: CheckboxChangeEvent) => {
    this.setState({
      autoLogin: e.target.checked,
    })
  }

  handleSubmit = (err: any, values: FromDataType) => {
    const {type} = this.state
    if (!err) {
      const {dispatch} = this.props
      dispatch({
        type: 'BLOCK_NAME_CAMEL_CASE/login',
        payload: {
          ...values,
          type,
        },
      })
    }
  }

  onTabChange = (type: string) => {
    this.setState({type})
  }

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      if (!this.loginForm) {
        return
      }
      this.loginForm.validateFields(['email'], {}, (err: any, values: FromDataType) => {
        if (err) {
          reject(err)
        } else {
          const {dispatch} = this.props;
          ((dispatch({
            type: 'BLOCK_NAME_CAMEL_CASE/getCaptcha',
            payload: values.email,
          }) as unknown) as Promise<any>)
            .then(resolve)
            .catch(reject)
        }
      })
    })

  renderMessage = (content: string) => (
    <Alert style={{marginBottom: 24}} message={content} type="error" showIcon/>
  )

  render() {
    const {BLOCK_NAME_CAMEL_CASE, submitting} = this.props
    const {status, type: loginType} = BLOCK_NAME_CAMEL_CASE
    const {type, autoLogin} = this.state
    return (
      <div className={styles.main}>
          <Form layout="inline">
            <Form.Item>
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                placeholder="Username"
              />,
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                type="password"
                placeholder="Password"
              />,
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
          <div className={styles.other}>
            <FormattedMessage id="BLOCK_NAME.login.sign-in-with"/>
            <Icon type="alipay-circle" className={styles.icon} theme="outlined"/>
            <Icon type="github" className={styles.icon} theme="outlined"/>
            <Link className={styles.register} to="/user/register">
              <FormattedMessage id="BLOCK_NAME.login.signup"/>
            </Link>
          </div>
      </div>
    )
  }
}

export default PAGE_NAME_UPPER_CAMEL_CASE
