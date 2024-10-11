import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConfigProvider, App as AntApp } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { StyleProvider } from '@ant-design/cssinjs'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { router } from './route'

const theme = {
  cssVar: true,
  hashed: false
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position='top-center' richColors closeButton/>
    <ConfigProvider locale={zhCN} prefixCls='zhenh' theme={theme}>
      <StyleProvider>
        <AntApp>
          <RouterProvider router={router} />
        </AntApp>
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>,
)
