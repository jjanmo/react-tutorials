import { createFileRoute } from '@tanstack/react-router'
import StateManagementList from '@/components/StateManagementList'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <StateManagementList />
    </>
  )
}
