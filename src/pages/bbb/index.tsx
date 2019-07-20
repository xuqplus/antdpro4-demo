import React from 'react'

import styles from './index.css'
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale'
import { Input } from 'antd'

export default function () {
  return (
    <div className={styles.normal}>
      <h1>Page bbb/index</h1>
      <h1>i18n - bbb.name = {<FormattedMessage id="bbb.name"/>}</h1>
      <h1>i18n - bbb.message = {<FormattedMessage id="bbb.message"/>}</h1>
      <hr/>
      <Input value={'i18n - bbb.message = ' + formatMessage({id: 'bbb.message'})}/>
    </div>
  )
}
