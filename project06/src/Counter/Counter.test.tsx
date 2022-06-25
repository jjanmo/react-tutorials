import Counter from './Counter'
import { render, screen } from '@testing-library/react'

test('the counter starts at 0', () => {
  render(<Counter />)
  const countElem = screen.getByTestId('count')
  expect(countElem).toHaveTextContent('0')
})
