import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { router } from './routes/root'

const client = new QueryClient()

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <CssBaseline />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default App
