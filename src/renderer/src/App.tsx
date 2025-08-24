import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <img alt="logo" className="logo" src={electronLogo} />
      <div className="creator">由 electron-vite 强力驱动</div>
      <div className="text">
        通过 <span className="react">React</span>
        &nbsp;和 <span className="ts">TypeScript</span>
        &nbsp;构建一个 Electron 应用
      </div>
      <p className="tip">
        尝试按下 <code>F12</code> 来使用开发者工具
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://cn.electron-vite.org/" target="_blank" rel="noreferrer">
            文档
          </a>
        </div>
        <div className="action">
          <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
            发送 IPC
          </a>
        </div>
      </div>
      <Versions></Versions>
    </>
  )
}

export default App
