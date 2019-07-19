import React from 'react'

import styles from './index.css'

const data = 'hello, 世界.'

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page aaa/index data = {data}</h1>
    </div>
  )
}
