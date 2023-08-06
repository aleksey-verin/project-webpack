import { FC, useState } from 'react'
import './Counter.scss'

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      <div>{count}</div>
    </div>
  )
}
