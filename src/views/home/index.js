import React from 'react'
import { renderRoutes } from 'react-router-config'
import HomeNav from '../../components/home-nav'
import './index.scss'

function HomeView (props) {
  const { route } = props
  return (
    <>
      <HomeNav />
      <div className="home__content">
        <div className="container">
          { renderRoutes(route.routes) }
        </div>
      </div>
    </>
  )
}

export default HomeView

