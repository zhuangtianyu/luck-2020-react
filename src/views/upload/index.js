import React from 'react'
import { Upload, Icon, message } from 'antd'
import './index.scss'

message.config({ top: 200 })

const { Dragger } = Upload

function UploadView () {
  const props = {
    name: 'file',
    multiple: false,
    action: 'http://zhuangtianyu.com:1995/luck/upload',
    onChange (info) {
      const { status, response } = info.file
      switch (status) {
        case 'uploading':
          return undefined
        case 'error':
          message.error(`${info.file.name} 文件上传失败`)  
          break
        case 'done':
          response.status !== true
            ? message.error(`${info.file.name} 文件上传失败`)
            : console.log(response.data.src)
          break
        default:
          return undefined
      }
    }
  }

  return (
    <div className="upload__view">
      <div className="upload__dragger">
        <Dragger { ...props }>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">点击或拖拽至此处</p>
        </Dragger>
      </div>
    </div>
  )
}

export default UploadView





