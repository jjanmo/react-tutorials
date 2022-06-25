import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleClickPlus = () => setCount(count + 1)
  const handleClickMinus = () => setCount(count - 1)

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <div className="controls">
        <button data-testid="plus-btn" onClick={handleClickPlus}>
          +
        </button>
        <button data-testid="minus-btn" onClick={handleClickMinus}>
          -
        </button>
      </div>
    </div>
  )
}

export default Counter
