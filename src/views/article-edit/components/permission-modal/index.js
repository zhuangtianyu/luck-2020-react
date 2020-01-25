import React, { useState } from 'react'
import { checkEditPermission } from '../../../../service'
import { Modal, Input, message } from 'antd'

message.config({ top: 200 })

function PermissionModal (props) {
  const { permissionCancel, permissionPassed } = props

  const [checking, setChecking] = useState(false)
  const [visible, setVisible] = useState(true)
  const [password, setPassword] = useState('')

  const handleCancel = () => {
    setVisible(false)
    permissionCancel()
  }

  const check = async (password) => {
    setChecking(true)
    try {
      await checkEditPermission({ password })
      setChecking(false)
      setVisible(false)
      permissionPassed(password)
    }
    catch (errorMessage) {
      message.error(errorMessage)
      setChecking(false)
    }
  }

  return (
    <Modal
      className="permission__modal"
      title="编辑权限校验"
      visible={ visible }
      onOk={ () => check(password) }
      confirmLoading={ checking }
      onCancel={ handleCancel }
    >
      <div className="permission__modal__guide">请输入密码:</div>
      <Input
        type="password"
        onChange={ e => setPassword(e.target.value) }
        onPressEnter={ () => check(password) }
      />
    </Modal>
  )
}

export default PermissionModal





