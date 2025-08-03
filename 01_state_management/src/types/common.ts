export type StateManagementId =
  | 'jotai'
  | 'react-tracked'
  | 'redux-toolkit'
  | 'valtio'
  | 'xstate'
  | 'zustand'

export type StateManagementItem = {
  id: StateManagementId
  name: string
  url: string
  github: string
  docs: string
}
