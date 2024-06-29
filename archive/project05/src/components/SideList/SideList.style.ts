import styled from '@emotion/styled'
import { ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'

export const SBox = styled(Box)`
  width: 80%;
  margin: 2rem auto;
  overflow-y: auto;
`
export const SListItem = styled(ListItem)`
  padding-bottom: 10px;
  cursor: pointer;

  & + & {
    margin-top: 10px;
  }
  &:hover {
    background-color: #c7ecee;
  }
`
export const SListItemText = styled(ListItemText)``
