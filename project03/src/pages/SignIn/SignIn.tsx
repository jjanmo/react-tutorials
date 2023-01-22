import { SocialType } from '@@types/auth'
import { AuthContext } from '@context/auth'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import SocialButton from '@components/SocialButton'
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
    watch,
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

  const onSubmit = () => {
    const { email, password } = watch()

    signInByEmailAndPassword(email, password)
    // 로딩 -> 홈으로 이동
  }

  // const onSubmit = handleSubmit((data) => console.log(data))

  const onClickProvider = (type: SocialType) => () => {
    signInWithProvider(type)
  }

  return (
    <CS.Container>
      <CS.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Koala Talk 🐨</h1>
          <CS.Input type="email" placeholder="Email" {...register('email', { required: true })} />
          <CS.Input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          <S.SubmitButton type="submit" name="submit-button" value="Submit" />
        </S.Form>
        <S.Divider>OR</S.Divider>
        <S.ButtonWrapper>
          <SocialButton type="google" text="Login Google" onClick={onClickProvider('google')} />
          <SocialButton type="github" text="Login Github" onClick={onClickProvider('github')} />
          {/* <button data-type="google">
            Continue with Google
          </button>
          <button data-type="github" >
            Continue with Github
          </button> */}
        </S.ButtonWrapper>
      </CS.Wrapper>
    </CS.Container>
  )
}

export default SignIn
