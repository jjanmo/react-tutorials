import { AuthContext } from 'context/auth';
import { useContext, useState } from 'react';

function SignIn() {
  const { signInWithProvider, signInByEmailAndPassword } =
    useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signInByEmailAndPassword(userInfo.email, userInfo.password);
    // 로딩 -> 홈으로 이동
  };

  const onClickProvider = (e) => {
    const type = e.target.dataset.type;
    signInWithProvider(type);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
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
  );
}

export default SignIn;