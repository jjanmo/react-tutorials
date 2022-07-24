import { Link } from 'react-router-dom'

function Home() {
  return (
    <ul>
      <li>
        <Link to="/quiz">Quiz</Link>
      </li>
    </ul>
  )
}

export default Home
