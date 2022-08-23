import { Button, List } from '@mui/material'
import { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { data } from './data'
import Question from './Question'

export interface IFormValues {
  [key: string]: string
}
export type QuizStepType = 'BeforeSubmit' | 'AfterSubmit'

function Quiz() {
  const [quizStep, setQuizStep] = useState<QuizStepType>('BeforeSubmit')
  const form = useForm<IFormValues>({
    mode: 'onChange',
    defaultValues: {
      quiz0: '',
      quiz1: '',
      quiz2: '',
      quiz3: '',
      quiz4: '',
    },
  })

  const selected = form.watch()
  const answers = data.map((item) => item.answer)
  const selectedAll = Object.values(selected).every(Boolean)
  const rightAll = Object.values(selected)
    .map((item, index) => item === answers[index])
    .every(Boolean)

  const onSubmit: SubmitHandler<IFormValues> = () => {
    setQuizStep('AfterSubmit')
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <List>
          {data.map((item, order) => (
            <Question
              key={order}
              {...item}
              order={order}
              answer={answers[order]}
              quizStep={quizStep}
            />
          ))}
        </List>
        {quizStep === 'BeforeSubmit' && (
          <Button type="submit" disabled={!selectedAll}>
            제출
          </Button>
        )}
        {quizStep === 'AfterSubmit' && (
          <Button
            type="button"
            disabled={!rightAll}
            onClick={() => alert('오늘의 학습 끝\n 고생하셨습니다. 🙏')}
          >
            다했어요
          </Button>
        )}
      </form>
    </FormProvider>
  )
}

export default Quiz
