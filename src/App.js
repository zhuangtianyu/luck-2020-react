import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import './styles/reset.scss'
import './styles/index.scss'
import './styles/dark.scss'

function App () {
  return (
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  )
}

export default App
