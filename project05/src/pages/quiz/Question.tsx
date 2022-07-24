interface Props {
  order: number
  option: string
  index: number
}

function Question({ order, option, index }: Props) {
  return (
    <li>
      <input type="radio" name={`quiz${order}`} value={option} id={`${index}${option}`} />
      <label htmlFor={`${index}${option}`}>{option}</label>
    </li>
  )
}

export default Question
