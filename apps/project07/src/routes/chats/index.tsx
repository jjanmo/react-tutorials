import ChatList from '@/pages/ChatList'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chats/')({
  component: ChatList,
})
