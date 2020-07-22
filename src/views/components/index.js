import React from 'react'
import Button from '../../components/button'
import Input from '../../components/input'
import Loading from '../../components/loading'
import Modal from '../../components/modal'
import './index.scss'

class ComponentsView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: 'im a input.'
    }
  }

  renderButtonEg () {
    return (
      <>
        <Button
          className="morning-button"
          onClick={() => alert('clicked')}
        >
          morning
        </Button>

        <Button type="primary">
          afternoon
        </Button>

        <Button disabled>
          夜晚
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

  renderModalEg () {
    return (
      <Button
        onClick={() => this.renderModal()}
      >
        open modal.
      </Button>
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

        </div>
      </div>
    )
  }
}

export default ComponentsView
