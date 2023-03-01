import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import GNB from './components/GNB'

const client = new QueryClient()

function Root() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <CssBaseline />

        <GNB />

        <Outlet />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default Root
