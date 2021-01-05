import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../button'
import './index.scss'

const modalRoot = document.createElement('div')
modalRoot.className = 'modal-root'
document.querySelector('body').appendChild(modalRoot)

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cancelLoading: false,
      confirmLoading: false
    }
  }

  static render (props) {
    ReactDOM.render(<Modal {...props} />, modalRoot)
  }

  static destory () {
    ReactDOM.unmountComponentAtNode(modalRoot)
  }

  handleCancel () {
    const {
      asyncCancel = false,
      onCancel = () => {}
    } = this.props

    onCancel()

    asyncCancel
      ? this.setState({ cancelLoading: true })
      : Modal.destory()
  }

  handleConfirm () {
    const {
      asyncConfirm = false,
      onConfirm = () => {}
    } = this.props

    onConfirm()

    asyncConfirm
      ? this.setState({ confirmLoading: true })
      : Modal.destory()
  }

  handleClose () {
    const { onClose = () => {} } = this.props
    onClose()
    Modal.destory()
  }

  render () {
    const {
      title = '',
      content = '',
      cancelText = '取消',
      confirmText = '确认'
    } = this.props

    const {
      cancelLoading,
      confirmLoading
    } = this.state

    return (
      <div className="modal">
        <div className="modal-shadow">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">{title}</div>
              <div className="modal-close" onClick={() => this.handleClose()}>
                <img
                  className="modal-close-icon"
                  src="https://zhuangtianyu.com/image/1595404023939.png"
                  alt="modal-close-icon"
                />
              </div>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <Button
                loading={cancelLoading}
                onClick={() => this.handleCancel()}
              >
                {cancelText}
              </Button>
              <Button
                type="primary"
                loading={confirmLoading}
                onClick={() => this.handleConfirm()}
              >
                {confirmText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
