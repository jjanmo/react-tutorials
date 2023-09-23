import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FirebaseError } from 'firebase/app'
import { SocialType } from '@@types/auth'
import useAuthContext from '@context/auth'
import SocialButton from '@components/SocialButton'
import { errorCode } from '@constants/errors'
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
  const isSignin = location.pathname === '/signin'

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const navigate = useNavigate()

  const { signInWithProvider, signInByEmailAndPassword, signUpByEmailAndPassword } =
    useAuthContext()

  const onSubmit = async () => {
    const { email, password, confirmedPassword } = watch()
    if (confirmedPassword && password !== confirmedPassword)
      return alert('Passwords did not match ☠️')

    const result = isSignin
      ? await signInByEmailAndPassword(email, password)
      : await signUpByEmailAndPassword(email, password)

    const defaultErrorMessage = isSignin ? 'Signin failed' : 'Signup failed'
    if (result instanceof FirebaseError) {
      return errorCode[result.code] ? alert(errorCode[result.code]) : defaultErrorMessage
    }

    return navigate('/')
  }

  const onClickProvider = (type: SocialType) => async () => {
    await signInWithProvider(type)
    navigate('/')
  }

  return (
    <CS.Container>
      <CS.Wrapper>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <h1>{isSignin ? 'SignIn 🐨' : 'SignUp 🐨'}</h1>
          <CS.Input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Need to enter email ✉️' })}
          />
          {errors['email'] && <S.Error>{errors['email'].message}</S.Error>}
          <CS.Input
            type="password"
            placeholder="Password"
            {...register('password', { required: 'Need to enter password 🔐' })}
          />
          {errors['password'] && <S.Error>{errors['password'].message}</S.Error>}
          {!isSignin && (
            <>
              <CS.Input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmedPassword', {
                  required: 'Need to enter confirm password 🔐',
                })}
              />
              {errors['confirmedPassword'] && (
                <S.Error>{errors['confirmedPassword'].message}</S.Error>
              )}
            </>
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
