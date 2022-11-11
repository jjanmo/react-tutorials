import { CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/root'

const client = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={client}>
      <CssBaseline />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
