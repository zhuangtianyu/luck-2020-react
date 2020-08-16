import React from 'react'
import './index.scss'

class Switch extends React.Component {
  constructor (props) {
    super(props)
    const { defaultValue = false } = props
    this.state = { value: defaultValue }
  }

  render () {
    const { value } = this.state
    const { onChange = () => {} } = this.props;
    const statusName = value ? 'on' : 'off'

    return (
      <div
        className={`switch ${statusName}`}
        onClick={() => {
          this.setState({ value: !value })
          onChange(!value)
        }}
      >
        <div className="switch-slider" />
      </div>
    )
  }
}

export default Switch
