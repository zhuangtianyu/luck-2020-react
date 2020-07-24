import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Loading from '../../components/loading'
import Modal from '../../components/modal'
import Textarea from '../../components/textarea'
import Toast from '../../components/toast'
import './index.scss'

class ComponentsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'im a input.',
      textareaValue: 'im a textarea.'
    }
  }

  renderButtonEg () {
    return (
      <>
        <Button
          className="morning-button"
          onClick={() => Toast.show('good morning')}
        >
          morning
        </Button>

        <Button
          type="primary"
          onClick={() => Toast.show('good afternoon')}
        >
          afternoon
        </Button>

        <Button disabled>
          夜晚
        </Button>

        <Button loading>
          loading
        </Button>

        <Button type="text">
          text button
        </Button>

        <Button type="link">
          link button
        </Button>
      </>
    )
  }

  renderInputEg () {
    const { inputValue } = this.state

    return (
      <Input
        value={inputValue}
        onChange={event => {
          this.setState({ inputValue: event.target.value })
        }}
      />
    )
  }

  renderLoadingEg () {
    return (
      <Button
        onClick={() => {
          Loading.show()

          const timer = setTimeout(() => {
            Loading.hide()
            clearTimeout(timer)
          }, 1000)
        }}
      >
        show loading
      </Button>
    )
  }

  renderModal () {
    Modal.render({
      title: '是否',
      content: (
        <>
          <div>是否这次我将真的离开你</div>
          <div>是否这次我将不再哭</div>
        </>
      ),
      onCancel: () => console.log('on-cancel'),
      onConfirm: () => console.log('on-confirm'),
      onClose: () => console.log('on-close')
    })
  }

  renderAsyncModal () {
    Modal.render({
      title: '异步弹窗',
      content: (
        <div>点击按钮, 触发异步关闭弹窗</div>
      ),
      onCancel: () => {
        const timer = setTimeout(() => {
          Modal.destory()
          clearTimeout(timer)
        }, 1000)
      },
      onConfirm: () => {
        const timer = setTimeout(() => {
          Modal.destory()
          clearTimeout(timer)
        }, 1000)
      },
      onClose: () => console.log('on-close'),
      asyncCancel: true,
      asyncConfirm: true
    })
  }

  renderModalEg () {
    return (
      <>
        <Button
          onClick={() => this.renderModal()}
        >
          open modal
        </Button>

        <Button
          onClick={() => this.renderAsyncModal()}
        >
          open async modal
        </Button>
      </>
    )
  }

  renderToastEg () {
    return (
      <>
        <Button onClick={() => Toast.show('春风秋雨 飘飘落落 只为寂寞')}>
          伍佰 - last dance
        </Button>

        <Button onClick={() => Toast.show('我可以很久不和你连络 任日子一天天这么过')}>
          伍佰 - 被动
        </Button>
      </>
    )
  }

  renderTextareaEg () {
    const { textareaValue } = this.state

    return (
      <Textarea
        value={textareaValue}
        onChange={event => {
          this.setState({
            textareaValue: event.target.textareaValue
          })
        }}
      />
    )
  }

  render () {
    return (
      <div className="components-view">
        <div className="container">
  
        <div className="components-title">button</div>

        {this.renderButtonEg()}

        <div className="components-title">input</div>

        {this.renderInputEg()}

        <div className="components-title">loading</div>

        {this.renderLoadingEg()}

        <div className="components-title">modal</div>

        {this.renderModalEg()}

        <div className="components-title">toast</div>

        {this.renderToastEg()}

        <div className="components-title">textarea</div>

        {this.renderTextareaEg()}

        </div>
      </div>
    )
  }
}

export default ComponentsView
