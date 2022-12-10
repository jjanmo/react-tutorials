import { Outlet, useMatch } from 'react-router-dom'
import GNB from '../../components/GNB'
import NavCards from '../../components/NavCards'

export default function Home() {
  const match = useMatch('/')

  return (
    <div>
      {match && <NavCards />}
      {!match && (
        <>
          <GNB />
          <Outlet />
        </>
      )}
    </div>
  )
}
