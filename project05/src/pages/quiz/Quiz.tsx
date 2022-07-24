import { Button, List } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { data } from './data'
import Question from './Question'

/*
Step1
모두 체크 여부 확인 -> 버튼 활성화
제출
다 맞았는지 확인 -> O -> 다했어요 버튼 활성화
             -> X -> 다시 문제 풀이
Step2
틀린 문제를 풀면서 실시간으로 결과 보여줌
-> 다 맞으면 다했어요 버튼 활성화
*/

export interface IFormValues {
  [key: string]: string
}
type QuizStepType = 1 | 2
type ResultMarkType = 'O' | 'X' | '?'

function Quiz() {
  const form = useForm<IFormValues>()

  const answers = data.map((item) => item.answer)
  const [result, setResult] = useState<ResultMarkType[]>(
    Array.from({ length: data.length }, () => '?')
  )
  const [quizStep, setQuizStep] = useState<QuizStepType>(1)
  const [selectedAll, setSelectedAll] = useState<boolean>(false)
  const [rightAll, setRightAll] = useState<boolean>(false)

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    // console.log('data', data)
    console.log('>>>>', form.formState, form.formState.isDirty, form.formState.dirtyFields)

    const allSelected = Object.values(data).every(Boolean)
    if (!allSelected) return

    // let count = 0
    // setSelectedAll(true)
    // const result: ResultMarkType[] = Object.values(data).map((value, index) => {
    //   if (value === answers[index]) {
    //     count = count + 1
    //     return 'O'
    //   }
    //   return 'X'
    // })
    // setResult(result)
    // if (count === Object.values(data).length) setRightAll(true)
    // setQuizStep(2)
  }

  // submit전에 모든 것이 체크가 되었는지 여부를 판단해야함!
  // => react-form-hooks 을 사용해서 이를 체크할 수 있나??

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <List>
          {data.map((item, order) => (
            <Question key={order} {...item} order={order} result={result[order]} />
          ))}
        </List>
        {quizStep === 1 && <Button type="submit">제출</Button>}
        {quizStep === 2 && (
          <Button type="button" disabled={!selectedAll || !rightAll}>
            다했어요
          </Button>
        )}
      </form>
    </FormProvider>
  )
}

export default Quiz
