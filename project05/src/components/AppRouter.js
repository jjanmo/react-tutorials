import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from 'pages/Auth';
import Home from 'pages/Home';
import Layout from './Layout';

function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {isLoggedIn ? (
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
