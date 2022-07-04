import { useState } from 'react'

function SummaryPage() {
  const [checked, setChecked] = useState(false)

  const handleChangeCheckbox = () => {
    setChecked(!checked)
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="order-checkbox"
          checked={checked}
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="order-checkbox">주문 내용을 확인하셨습니까?</label>
      </div>
      <button disabled={!checked}>주문 확인</button>
    </div>
  )
}

export default SummaryPage
