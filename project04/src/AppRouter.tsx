import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Counter from './Counter'
import ShopApp from './ShopApp'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/shop" element={<ShopApp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
