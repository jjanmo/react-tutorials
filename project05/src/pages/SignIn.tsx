import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/auth'

function SignIn() {
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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signInByEmailAndPassword(userInfo.email, userInfo.password)
    // 로딩 -> 홈으로 이동
  }

  const onClickProvider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLElement).dataset.type as string
    signInWithProvider(type)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={onChange} />
        <input type="password" name="password" placeholder="Password" onChange={onChange} />
        <input type="submit" name="submit-button" value="Submit" />
      </form>
      -----------------------
      <ul>
        <button data-type="google" onClick={onClickProvider}>
          Continue with Google
        </button>
        <button data-type="github" onClick={onClickProvider}>
          Continue with Github
        </button>
      </ul>
      <span>Already have an account? Log in.</span>
    </div>
  )
}

export default SignIn
