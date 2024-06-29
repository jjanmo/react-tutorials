import { Outlet } from 'react-router-dom'
import GNB from '../GNB'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <GNB />
      {/* {children} */}
      <Outlet />
    </div>
  )
}
