import { render, screen } from '@testing-library/react'
import Type from '../Type'

test('displays product images which fetch from server', async () => {
  render(<Type orderType="products" />)

  const productImages = (await screen.findAllByRole('img', {
    name: /product$/i,
  })) as HTMLImageElement[]
  expect(productImages).toHaveLength(2)

  const altTexts = productImages.map((image) => image.alt)
  expect(altTexts).toEqual(['america product', 'england product'])
})
