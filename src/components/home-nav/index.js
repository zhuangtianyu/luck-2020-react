import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'

function HomeNav () {
  const navList = [
    { path: '/', name: 'intro', exact: true },
    { path: '/home/article', name: '博客' },
    { path: '/home/resume', name: '关于' },
  ]
  return (
    <div className="home__nav">
      <div className="home__nav__list container">
        {
          navList.map(item => (
            <NavLink
              className="home__nav__item"
              to={ item.path }
              key={ item.path }
              exact={ item.exact }
            >
              { item.name }
            </NavLink>
          ))
        }
      </div>
    </div>
  )
}

export default HomeNav




