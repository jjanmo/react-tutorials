import { SocialType } from '@@types/auth'
import useAuthContext from '@context/auth'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from 'react-router-dom'
import SocialButton from '@components/SocialButton'
import Spinner from '@icons/Spinner'
import * as CS from '../commom.style'
import * as S from './Form.style'

interface FormData {
  email: string
  password: string
  confirmedPassword?: string
}

function Form() {
  const location = useLocation()
  const isSignIn = location.pathname === '/signin'

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const navigate = useNavigate()

  const { signInWithProvider, signInByEmailAndPassword, signUpByEmailAndPassword } =
    useAuthContext()

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
    const { email, password, confirmedPassword } = watch()
    if (isSignIn) {
      await signInByEmailAndPassword(email, password)
    } else {
      if (password !== confirmedPassword) return alert('Passwords did not match ☠️')

      await signUpByEmailAndPassword(email, password)
    }
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
          <h1>{isSignIn ? 'SignIn 🐨' : 'SignUp 🐨'}</h1>
          <CS.Input type="email" placeholder="Email" {...register('email', { required: true })} />
          <CS.Input
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
          {!isSignIn && (
            <CS.Input
              type="password"
              placeholder="Confirm Password"
              {...register('confirmedPassword', { required: true })}
            />
          )}

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

export default Form
