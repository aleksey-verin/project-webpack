import { FC } from 'react'
import { Counter } from './components/Counter'

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App
