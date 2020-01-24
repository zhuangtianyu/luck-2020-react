import React from 'react'
import { renderRoutes } from 'react-router-config'

const RouterView = (props) => {
  const { route, children } = props
  return (
    <div>
      { children }
      { renderRoutes(route.routes) }
    </div>
  )
}

export default RouterView



