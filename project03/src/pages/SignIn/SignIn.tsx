import { SocialType } from '@@types/auth'
import { AuthContext } from '@context/auth'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SocialButton from '@components/SocialButton'
import Spinner from '@icons/Spinner'
import * as CS from '../commom.style'
import * as S from './SignIn.style'

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
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const navigate = useNavigate()

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

  const onSubmit = async () => {
    const { email, password } = watch()

    await signInByEmailAndPassword(email, password)
    navigate('/')
  }

  const onClickProvider = (type: SocialType) => async () => {
    await signInWithProvider(type)
    navigate('/')
  }

  return (
    <CS.Container>
      <CS.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>SignIn 🐨</h1>
          <CS.Input type="email" placeholder="Email" {...register('email', { required: true })} />
          <CS.Input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {isSubmitting ? (
            <S.SpinnerBox>
              <Spinner />
            </S.SpinnerBox>
          ) : (
            <S.SubmitButton
              type="submit"
              name="submit-button"
              value="Submit"
              disabled={isSubmitting}
            />
          )}
        </S.Form>
        <S.Divider>OR</S.Divider>
        <S.ButtonWrapper>
          <SocialButton
            type="google"
            text="Continue with Google"
            onClick={onClickProvider('google')}
          />
          <SocialButton
            type="github"
            text="Continue with Github"
            onClick={onClickProvider('github')}
          />
        </S.ButtonWrapper>
      </CS.Wrapper>
    </CS.Container>
  )
}

export default SignIn
