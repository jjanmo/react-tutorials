import styled from '@emotion/styled'
import { Box, Container, ListItem, ListItemIcon } from '@mui/material'

export const SBox = styled(Box)`
  background-color: #4c9aff;
  width: 100vw;
  min-height: calc(100vh - 60px);
  padding: 1rem;
`
export const SContainer = styled(Container)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 20vh;
  padding: 1rem 0;
  margin: 0;
`
export const SListItem = styled(ListItem)`
  background-color: white;
  border-radius: 10px;

  & + & {
    margin-top: 10px;
  }
`
export const SListItemIcon = styled(ListItemIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
`
