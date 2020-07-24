import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

let timer

const toastRoot = document.createElement('div')
toastRoot.className = 'toast-root'
document.querySelector('body').appendChild(toastRoot)

class Toast extends React.Component {
  static show (message, duration = 1500) {
    this.hide()

    ReactDOM.render(<Toast message={message} />, toastRoot)

    timer = setTimeout(this.hide, duration)
  }

  static hide () {
    timer && clearTimeout(timer)

    ReactDOM.unmountComponentAtNode(toastRoot)
  }

  render () {
    const { message } = this.props

    return <div className="toast">{message}</div>
  }
}

export default Toast
