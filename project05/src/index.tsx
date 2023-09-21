import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { RouterProvider } from 'react-router-dom'
import router from './AppRouter'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { CssBaseline } from '@mui/material'

const client = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <RecoilRoot>
    <QueryClientProvider client={client}>
      <CssBaseline />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
)

reportWebVitals()
