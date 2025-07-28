import axios from 'axios'
import { useEffect, useState } from 'react'
import Product from './Product'

interface ProductImages {
  name: string
  imagePath: string
}

interface Props {
  orderType: 'products' | 'options'
}

function Type({ orderType }: Props) {
  const [images, setImages] = useState<ProductImages[]>([])

  const fetchImages = async () => {
    try {
      const { data } = await axios.get<ProductImages[]>(`http://localhost:5000/${orderType}`)
      setImages(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ItemComponent = (
    orderType === 'products' ? Product : null
  ) as React.ComponentType<ProductImages>
  // null → Option components

  return (
    <div>
      <ul>
        {images?.length > 0 &&
          images.map((image) => (
            <li key={image.name}>
              <ItemComponent {...image} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Type
