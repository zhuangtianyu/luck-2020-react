import React from 'react'
import { renderRoutes } from 'react-router-config'
import HomeNav from '../../components/home-nav'

function HomeView (props) {
  const { route } = props
  return (
    <>
      <HomeNav />
      <div className="container">
        { renderRoutes(route.routes) }
      </div>
    </>
  )
}

export default HomeView

