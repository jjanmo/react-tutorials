import Counter from './Counter'
import { render, screen } from '@testing-library/react'

test('the counter starts at 0', () => {
  render(<Counter />)
  const countElem = screen.getByTestId('count')
  expect(countElem).toHaveTextContent('0')
})

test('plus button has correct text', () => {
  render(<Counter />)
  const plusBtnElem = screen.getByTestId('plus-btn')
  expect(plusBtnElem).toHaveTextContent('+')
})

test('minus button has correct text', () => {
  render(<Counter />)
  const minusBtnElem = screen.getByTestId('minus-btn')
  expect(minusBtnElem).toHaveTextContent('-')
})
