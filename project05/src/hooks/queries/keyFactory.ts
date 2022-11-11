export const userKeys = {
  users: ['users'] as const,
  user: (id: number) => [...userKeys.users, id],
}
