import { AuthContext } from 'context/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function Header() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <S.Container>
      {user ? (
        <>
          <div>{user.email}</div>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <>
          <div>Koala Talks</div>
          <S.LinkWrapper>
            <Link to="/signin">SignIn</Link>
            <Link to="/signup">SignUp</Link>
          </S.LinkWrapper>
        </>
      )}
    </S.Container>
  );
}

export default Header;
