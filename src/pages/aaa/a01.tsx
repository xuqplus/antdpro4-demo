import React, { Component } from 'react'

import styles from './a01.css'
import { connect } from 'dva'

@connect((state) => {
  return {
    username: state['aaa.a01'].username,
    // xiaodi: state['aaa'].xiaodi,
    xiaodi: state.aaa.xiaodi,
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
      </div>
    )
  }
}

export default A01
