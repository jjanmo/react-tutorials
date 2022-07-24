import { ListItem } from '@mui/material'

interface Props {
  order: number
  question: string
  options: string[]
  answer: string
}

function Question({ order, question, options, answer }: Props) {
  return (
    <ListItem sx={{ flexDirection: 'column', marginY: '10px' }}>
      <div>결과보여주는 곳</div>
      <div>{question}</div>
      <ul>
        {options.map((option, index) => (
          <li key={option}>
            <input
              type="radio"
              name={`quiz${order}`}
              value={option}
              id={`${order}-${index}-${option}`}
            />
            <label htmlFor={`${order}-${index}-${option}`}>{option}</label>
          </li>
        ))}
      </ul>
    </ListItem>
  )
}

export default Question
