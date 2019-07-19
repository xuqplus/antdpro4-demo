import React from 'react'

import styles from './index.css'
import { Button, message } from 'antd'

const data = 'hello, 世界.'

const successClick = () => {
  message.success('有人点击啦')
}

let bbb = 0

const plusClick = () => {
  bbb += 1
  message.success(`bbb now is ${bbb}`)
}

export default function () {
  const errorClick = () => {
    message.error('有人点击啦')
  }

  return (
    <div className={styles.normal}>
      <h1>Page aaa/index data = {data}</h1>

      <Button>这是antd的按钮</Button>
      <br/>
      <Button type="default">这是antd的按钮</Button>
      <Button type="primary">这是antd的按钮</Button>
      <Button type="ghost">这是antd的按钮</Button>
      <Button type="dashed">这是antd的按钮</Button>
      <Button type="danger">这是antd的按钮</Button>
      <Button type="link">这是antd的按钮</Button>
      <br/>
      <Button type="primary" onClick={successClick}>点击一下 - success</Button>
      <Button type="danger" onClick={errorClick}>点击一下 - error</Button>

      <br/>
      <Button type="primary" onClick={plusClick}>点击一下 - 变量自增</Button>
    </div>
  )
}
