import { ButtonGroup, Grid } from '@mui/material'
import { Box, styled } from '@mui/system'

export const SBox = styled(Box)`
  width: 50%;
  margin: 3rem auto;

  background-color: #eee;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const GridContainer = styled(Grid)`
  justify-content: space-between;
`

export const GridItem = styled(Grid)`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 10px;
    border: 1px solid black;
  }
`
export const Row = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  & + & {
    margin-top: 10px;
  }
  svg {
    margin-left: 5px;
  }
  em {
    font-size: 20px;
  }
`
export const SButtonGroup = styled(ButtonGroup)`
  margin: 1rem 0;

  button {
    font-size: 16px;
    font-weight: bold;
  }
`
