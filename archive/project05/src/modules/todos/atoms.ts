import { atom } from 'recoil'
import { v1 } from 'uuid'

export const todosState = atom({
  key: `@todos${v1()}`,
  default: [
    {
      id: 0,
      content: '자바스크립트 공부하기',
    },
    {
      id: 1,
      content: 'D3 튜터리얼 하기!',
    },
    {
      id: 2,
      content: 'CSS 공부하기!',
    },
    {
      id: 3,
      content: '요가하기',
    },
    {
      id: 4,
      content: '피아노 배우기',
    },
  ],
})
