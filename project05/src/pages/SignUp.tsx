import { AuthContext } from '@context/auth'
import React, { useContext, useState } from 'react'

function SignUp() {
  const { signUpByEmailAndPassword, signInWithProvider } = useContext(AuthContext)
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
    signUpByEmailAndPassword(userInfo.email, userInfo.password)
    // 로딩 -> 홈으로 이동
  }

  const onClickProvider = (e: React.MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLElement).dataset.type as string
    signInWithProvider(type)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userInfo.email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          placeholder="Password"
          onChange={onChange}
        />
        <input type="submit" name="submit-button" value="Submit" />
      </form>
      -----------------------
      <ul>
        <button data-type="google" onClick={onClickProvider}>
          Sign up with Google
        </button>
        <button data-type="github" onClick={onClickProvider}>
          Sign up with Github
        </button>
      </ul>
    </div>
  )
}

export default SignUp
