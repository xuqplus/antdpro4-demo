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
        message.success('发起请求了');
        dispatch({
          type: namespace + '/a02',
        });
      },
    };
  },
)
class A02 extends Component {
  constructor(props: object) {
    super(props);
  }

  // 生命周期函数
  componentDidMount(): void {
    // 初始化时请求一次数据
    // message.success('aaa/a02 - componentDidMount');
    // this.props.aFunction();
  }

  render(): any {
    return (
      <div className={styles.normal}>
        <h1>Page aaa/a02</h1>
        <div>username = {this.props.username}</div>
        <div>message = {this.props.message}</div>
        {/*// 点击时请求一次数据*/}
        <Button onClick={this.props.aFunction}>点击发起请求</Button>
      </div>
    );
  }
}

export default A02;
