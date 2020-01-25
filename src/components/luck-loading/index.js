import React from 'react'
import { Spin, Icon } from 'antd'
import './index.scss'

function LuckLoading (props) {
  const loadingIcon = <Icon type="loading" className="luck__loading__icon" spin />

  return (
    props.loading === true
      ? <div className="luck__loading">
          <Spin indicator={ loadingIcon } />
        </div>
      : <></>
  )
}

export default LuckLoading




