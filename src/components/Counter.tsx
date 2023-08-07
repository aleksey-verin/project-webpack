import { FC, useState } from 'react'
import classes from './Counter.module.scss'

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className={classes.btn}>
      <button className={classes.green} onClick={increment}>
        increment
      </button>
      <div>{count}</div>
    </div>
  )
}
