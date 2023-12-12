interface Props {
  message: string
  user: string
}

export default function TalkItem({ message, user }: Props) {
  const handleDeleteClick = () => {}
  return (
    <div>
      <div>{message}</div>
      <div>{user}</div>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}
