import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Layout from './Layout';
import { useContext } from 'react';
import { AuthContext } from 'context/auth';

function AppRouter() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {user ? (
            <Route index element={<Home />} />
          ) : (
            <Route index element={<Auth />} />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
