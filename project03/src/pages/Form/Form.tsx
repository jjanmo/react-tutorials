import { SocialType } from '@@types/auth'
import useAuthContext from '@context/auth'
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
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()
  const navigate = useNavigate()

  const { signInWithProvider, signInByEmailAndPassword, signUpByEmailAndPassword } =
    useAuthContext()

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
          <CS.Input
            type="email"
            placeholder="Email"
            {...register('email', { required: 'Need to enter email ✉️' })}
          />
          {errors['email'] && <S.Error>{errors['email'].message}</S.Error>}
          <CS.Input
            type="password"
            placeholder="Password"
            minLength={6}
            {...register('password', { required: 'Need to enter password 🔐' })}
          />
          {errors['password'] && <S.Error>{errors['password'].message}</S.Error>}
          {!isSignIn && (
            <>
              <CS.Input
                type="password"
                placeholder="Confirm Password"
                minLength={6}
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
