import { ListItem } from '@mui/material'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { QuizStepType } from './Quiz'

interface Props {
  order: number
  question: string
  options: string[]
  answer: string
  quizStep: QuizStepType
}

function Question({ order, question, options, answer, quizStep }: Props) {
  const { register, watch } = useFormContext()
  const { onChange } = register(`quiz${order}`)
  const [isRight, setIsRight] = useState(false)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    void onChange(e)

    const selected = watch()
    if (selected[`quiz${order}`] === answer) setIsRight(true)
    else setIsRight(false)
  }

  return (
    <ListItem sx={{ flexDirection: 'column', marginY: '10px' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{`Quiz${
        order + 1
      } 번`}</div>
      <div>{quizStep === 'AfterSubmit' && (isRight ? '맞았어요' : '틀렸어요')}</div>
      <div>{question}</div>
      <ul>
        {options.map((option, index) => (
          <li key={option}>
            <input
              type="radio"
              value={option}
              id={`${order}-${index}-${option}`}
              {...register(`quiz${order}`)}
              onChange={handleChange}
            />
            <label htmlFor={`${order}-${index}-${option}`}>{option}</label>
          </li>
        ))}
      </ul>
    </ListItem>
  )
}

export default Question
