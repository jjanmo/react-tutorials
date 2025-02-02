import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form')({
  component: () => <div>This is Form Page</div>,
})
