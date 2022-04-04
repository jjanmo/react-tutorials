import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div>
      <Header />
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
