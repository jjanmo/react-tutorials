import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todos/$todoId/edit')({
  component: () => <div>Hello /todos/edit!</div>,
})
