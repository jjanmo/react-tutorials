import { ListItem } from '@mui/material'
import React, { useState } from 'react'
import { useFormContext, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { IFormValues } from './Quiz'

interface Props {
  order: number
  question: string
  options: string[]
  result?: string
}

function Question({ order, question, options, result }: Props) {
  const { register, formState } = useFormContext()

  const handleClick = (e: React.FormEvent<HTMLInputElement>) => {}

  return (
    <ListItem sx={{ flexDirection: 'column', marginY: '10px' }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{`Quiz${
        order + 1
      } 번`}</div>
      <div>결과보여주는 곳</div>
      <div>{question}</div>
      <ul>
        {options.map((option, index) => (
          <li key={option}>
            <input
              type="radio"
              value={option}
              id={`${order}-${index}-${option}`}
              {...register(`quiz${order}`)}
              onClick={handleClick}
            />
            <label htmlFor={`${order}-${index}-${option}`}>{option}</label>
          </li>
        ))}
      </ul>
    </ListItem>
  )
}

export default Question
