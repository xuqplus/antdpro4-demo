import React, { Component } from 'react'

import styles from './a01.css'
import { connect } from 'dva'
import { Button } from 'antd'

@connect((state) => {
  return {
    username: state['aaa.a01'].username,
    xiaodi: state['aaa.a01'].xiaodi,
    // xiaodi: state.aaa.xiaodi,
    clickCount: state['aaa.a01'].clickCount,
  }
}, (dispatch) => {
  return {
    plus: () => {
      dispatch({
        // namespace/方法名
        type: 'aaa.a01/clickCountPlus',
      })
    },
  }
})
class A01 extends Component {
  constructor(props: object) {
    super(props)
  }

  render() {
    return (
      <div className={styles.normal}>
        <h1>Page aaa/a01</h1>
        <hr/>
        <div>
          username = {this.props.username}
        </div>
        <div>
          xiaodi = {this.props.xiaodi}
        </div>
        <div>
          点击了多少次 = {this.props.clickCount}
        </div>
        <Button type="primary" onClick={this.props.plus}>connect,reducers, 数据流点击</Button>
        <br/>
        <div> 这里定义的函数名是 "plus", model里的函数名是 "clickCountPlus"
        </div>
      </div>
    )
  }
}

export default A01
