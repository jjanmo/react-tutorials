import ChatRoom from '@/pages/ChatRoom'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/chats/$chatId')({
  component: ChatRoom,
})
