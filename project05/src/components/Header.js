import { AuthContext } from 'context/auth';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <>
          <div>{user.email}</div>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/signin">SignIn</Link>
          <br />
          <Link to="/signup">SignUp</Link>
        </>
      )}
    </div>
  );
}

export default Header;
