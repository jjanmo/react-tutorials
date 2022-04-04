import { AuthContext } from 'context/auth';
import { useContext, useState } from 'react';
import firebaseApp from 'config/firebase';

function SignUp() {
  const { createUserByEmailAndPassword } = useContext(AuthContext);
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

  const onClickSubmit = async (e) => {
    e.preventDefault();
    createUserByEmailAndPassword(userInfo.email, userInfo.password);
  };

  return (
    <div>
      <form onSubmit={onClickSubmit}>
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
        <button>Sign up with Google</button>
        <button>Sign up with Github</button>
      </ul>
    </div>
  );
}

export default SignUp;
