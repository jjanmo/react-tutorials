interface Props {
  name: string
  imagePath: string
}

function Product({ name, imagePath }: Props) {
  return (
    <div>
      <img src={`http://localhost:5000${imagePath}`} alt={`${name.toLowerCase()} product`} />
      <form>
        <label htmlFor={`${name} quantity`}>{name}</label>
        <input type="number" id={`${name} quantity`} defaultValue={0} min={0} />
      </form>
    </div>
  )
}

export default Product
