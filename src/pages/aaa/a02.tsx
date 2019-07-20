import React, { Component } from 'react';

import styles from './a02.css';
import { connect } from 'dva';
import { Button, message } from 'antd';

const namespace = 'aaa.a02';

@connect(
  state => {
    return {
      username: state[namespace].username,
      message: state[namespace].message,
    };
  },
  dispatch => {
    return {
      aFunction: () => {
        message.success('有人点击了');
        dispatch({
          type: `${namespace}/aFunction`,
        });
      },
    };
  },
)
export default class A02 extends Component {
  constructor(props: object) {
    super(props);
  }

  render(): any {
    return (
      <div className={styles.normal}>
        <h1>Page aaa/a02</h1>
        <div>username = {this.props.username}</div>
        <div>message = {this.props.message}</div>
        <Button onClick={this.props.aFunction}>点击发起请求</Button>
      </div>
    );
  }
}
