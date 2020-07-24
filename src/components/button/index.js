import React from 'react'
import { LoadingIcon } from '../loading'
import './index.scss'

const Button = props => {
  const {
    loading,
    children,
    onClick = () => {},
    ...others
  } = props

  const handleClick = () => !loading && onClick()

  const opacity = loading ? '0.6' : '1.0'

  return (
    <button style={{ opacity }} onClick={handleClick} {...others}>
      {loading && <LoadingIcon />}
      {children}
    </button>
  )
}

export default Button
