import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Test Projects</h1>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/shop">ShopApp</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
