import { atom } from 'recoil'

export const todosState = atom({
  key: `@todos${Date.now()}`,
  default: [
    {
      id: 1,
      content: '자바스크립트 공부하기',
    },
    {
      id: 2,
      content: 'D3 튜터리얼 하기!',
    },
    {
      id: 3,
      content: 'CSS 공부하기!',
    },
    {
      id: 4,
      content: '요가하기',
    },
    {
      id: 5,
      content: '피아노 배우기',
    },
  ],
})
