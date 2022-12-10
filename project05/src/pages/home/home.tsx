import { Outlet, useMatch } from 'react-router-dom'
import GNB from '../../components/GNB'

export default function Home() {
  const match = useMatch('/')

  return (
    <div>
      {!match && <GNB />}
      <Outlet />
    </div>
  )
}
