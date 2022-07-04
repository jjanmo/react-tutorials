import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SummaryPage from '../SummaryPage'

test('unchecked checke-box and disabled confirm-button', () => {
  render(<SummaryPage />)

  const checkbox = screen.getByRole('checkbox', {
    name: '주문 내용을 확인하셨습니까?',
  }) as HTMLInputElement
  expect(checkbox.checked).toEqual(false)

  const confirmButton = screen.getByRole('button', { name: '주문 확인' }) as HTMLButtonElement
  expect(confirmButton.disabled).toBeTruthy()
})

test('after checked box, can click confirm-button', () => {
  render(<SummaryPage />)

  const checkbox = screen.getByRole('checkbox', {
    name: '주문 내용을 확인하셨습니까?',
  }) as HTMLInputElement

  userEvent.click(checkbox)
  expect(checkbox.checked).toEqual(true)

  const confirmButton = screen.getByRole('button', { name: '주문 확인' }) as HTMLButtonElement
  expect(confirmButton.disabled).toBeFalsy()
})
