import { useState } from 'react'
import * as S from './Counter.style'

function Counter() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)

  const handleClickPlus = () => setCount(count + 1)
  const handleClickMinus = () => setCount(count - 1)
  const handleClickOnOff = () => setDisabled(!disabled)

  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <div className="controls">
        <button data-testid="plus-btn" onClick={handleClickPlus} disabled={disabled}>
          +
        </button>
        <button data-testid="minus-btn" onClick={handleClickMinus} disabled={disabled}>
          -
        </button>
      </div>
      <div>
        <S.OnOffButton data-testid="onoff-btn" onClick={handleClickOnOff}>
          ON/OFF
        </S.OnOffButton>
      </div>
    </div>
  )
}

export default Counter
