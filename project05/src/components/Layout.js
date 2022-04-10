import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';

function Layout() {
  return (
    <div>
      <Header />
      <Navigation />
      <div></div>
      <Outlet />
    </div>
  );
}

export default Layout;
