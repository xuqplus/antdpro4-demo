import React from 'react'

import styles from './index.css'
import { Button } from 'antd'

const data = 'hello, 世界.'

export default function () {
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
    </div>
  )
}
