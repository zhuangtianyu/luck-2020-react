import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

function IntroView () {
  return (
    <div className="intro__view">
      <Link to="/home" className="home__link">
        每当浪潮来临的时候<br />你会不会也伤心→
      </Link>
      <a
        className="ICP"
        target="_blank"
        href="https://beian.miit.gov.cn/"
      >
        京ICP备18002046号-1
      </a>
    </div>
  )
}

export default IntroView



