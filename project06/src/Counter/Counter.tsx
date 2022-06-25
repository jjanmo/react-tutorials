import { useState } from 'react'
import * as S from './Counter.style'

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
      <div>
        <S.OnOffButton data-testid="onoff-btn">ON/OFF</S.OnOffButton>
      </div>
    </div>
  )
}

export default Counter
