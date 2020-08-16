import React from 'react'
import { NavLink } from 'react-router-dom'
import { getThemeMode, setThemeMode } from '../../utils'
import Switch from '../switch'
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
        <Switch
          defaultValue={getThemeMode() === 'dark'}
          onChange={value => {
            const mode = value ? 'dark' : 'default'
            setThemeMode(mode)
          }}
        />
      </div>
    </div>
  )
}

export default HomeNav
