import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/todos/$todoId/')({
  component: () => <div>Hello /todos/$todoId!</div>
})