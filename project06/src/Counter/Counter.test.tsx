import Counter from './Counter'
import { fireEvent, render, screen } from '@testing-library/react'

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

test('click plus button, add one(from 0 to 1)', () => {
  render(<Counter />)
  const plusBtnElem = screen.getByTestId('plus-btn')
  const countElem = screen.getByTestId('count')
  fireEvent.click(plusBtnElem)
  expect(countElem).toHaveTextContent('1')
})

test('click minus button, subtract one(from 0 to -1)', () => {
  render(<Counter />)
  const minusBtnElem = screen.getByTestId('minus-btn')
  const countElem = screen.getByTestId('count')
  fireEvent.click(minusBtnElem)
  expect(countElem).toHaveTextContent('-1')
})
