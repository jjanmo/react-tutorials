import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Quiz from './pages/quiz';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
