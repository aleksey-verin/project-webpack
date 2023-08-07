import { FC } from 'react'
import { Counter } from './components/Counter'
import './index.scss'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div className='app'>
      GFjshakdk
      <Counter />
    </div>
  )
}

export default App
