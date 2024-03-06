import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({initial=1,stock}) => {

  const [count, setCount] = useState(initial)
  
  const increment = () => {
    if(count < stock){
      setCount(prev => prev + 1)
    }
  }
  const decrement = () => {
    if(count > 1 ){
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className="divCounter">
      <h1>{count}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>

  )
}

export default ItemCount
