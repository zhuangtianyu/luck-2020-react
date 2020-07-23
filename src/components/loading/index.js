import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

const loadingRoot = document.createElement('div')
loadingRoot.className = 'loading-root'
document.querySelector('body').appendChild(loadingRoot)

class Loading extends React.Component {
  static show () {
    ReactDOM.render(<Loading />, loadingRoot)
  }

  static hide () {
    ReactDOM.unmountComponentAtNode(loadingRoot)
  }

  render () {
    return (
      <div className="loading">
        <div className="loading-shadow">
          <img
            className="loading-icon"
            src="http://zhuangtianyu.com/image/1595397636000.png"
            alt="loading-icon"
          />
        </div>
      </div>
    )
  }
}

export default Loading
