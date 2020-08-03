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

  const className = loading ? 'loading' : null

  return (
    <button
      className={className}
      onClick={handleClick}
      {...others}
    >
      {loading && <LoadingIcon />}
      {children}
    </button>
  )
}

export default Button
