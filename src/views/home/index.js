import React from 'react'
import { renderRoutes } from 'react-router-config'

function HomeView (props) {
  const { route } = props
  return (
    <>
      <div className="home__nav">home-nav</div>
      { renderRoutes(route.routes) }
    </>
  )
}

export default HomeView

