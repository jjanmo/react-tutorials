import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      Header
      <hr />
      <Outlet />
    </div>
  );
}

export default Layout;
