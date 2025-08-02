import { createFileRoute } from '@tanstack/react-router'
import GlobalStyle from '@/styles/Global'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <GlobalStyle />
      <div>Hello world</div>
    </>
  )
}
