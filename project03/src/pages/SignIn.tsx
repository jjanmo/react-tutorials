import { AuthContext } from '@context/auth'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as S from './SignIn.style'
import * as CS from './commom.style'

interface FormData {
  email: string
  password: string
}

function SignIn() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const { signInWithProvider, signInByEmailAndPassword } = useContext(AuthContext)

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e

    setUserInfo({
      ...userInfo,
      [name]: value,
    })
  }

  // const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   signInByEmailAndPassword(userInfo.email, userInfo.password)
  //   // 로딩 -> 홈으로 이동
  // }

  const onSubmit = handleSubmit((data) => console.log(data))

  const onClickProvider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLElement).dataset.type as string
    signInWithProvider(type)
  }

  return (
    <CS.Container>
      <S.Form onSubmit={onSubmit}>
        {/* <input type="email" name="email" placeholder="Email" onChange={onChange} /> */}
        <input type="email" placeholder="Email" {...register('email', { required: true })} />
        {/* <input type="password" name="password" placeholder="Password" onChange={onChange} /> */}
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <input type="submit" name="submit-button" value="Submit" />
      </S.Form>

      <S.ButtonWrapper>
        <button data-type="google" onClick={onClickProvider}>
          Continue with Google
        </button>
        <button data-type="github" onClick={onClickProvider}>
          Continue with Github
        </button>
      </S.ButtonWrapper>
      <span>Already have an account? Log in.</span>
    </CS.Container>
  )
}

export default SignIn
