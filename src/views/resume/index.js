import React from 'react'
import './index.scss'

function Resume () {
  return (
    <div className="resume__view">
      <div className="resume__view__base-info">
        <img
          className="resume__view__base-info__avatar"
          src="http://zhuangtianyu.com/image/1580058226968.jpeg"
          alt="avatar-cola"
        />
        <div className="resume__view__base-info__content">
          <h3 className="resume__view__base-info__name">庄天宇</h3>
          <div className="resume__view__base-info__career">前端开发工程师</div>
        </div>
      </div>

      <div className="resume__view__skill">
        <p>热爱原生 javascript.</p>
        <p>熟悉 vuejs，react，了解 nodejs.</p>
      </div>

      <div className="resume__view__contact">
        <p>
          邮箱：
          <a href="mailto:zhuangtianyu1995@163.com">
            zhuangtianyu1995@163.com
          </a>
        </p>
        <p>
          github：
          <a
            href="https://github.com/zhuangtianyu"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://github.com/zhuangtianyu
          </a>
        </p>
      </div>
    </div>
  )
}

export default Resume





