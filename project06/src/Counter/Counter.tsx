import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <div className="controls">
        <button data-testid="plus-btn">+</button>
        <button data-testid="minus-btn">-</button>
      </div>
    </div>
  )
}

export default Counter
