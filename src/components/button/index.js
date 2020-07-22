import React from 'react'
import './index.scss'

const Button = props => {
  const { children, ...others } = props
  
  return (
    <button {...others}>{children}</button>
  )
}

export default Button
