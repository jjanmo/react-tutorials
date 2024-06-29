import styled from '@emotion/styled'
import { Card, Container, List } from '@mui/material'

export const SContainer = styled(Container)`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
`
export const SList = styled(List)`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const SCard = styled(Card)`
  max-width: 150px;
  height: 150px;
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  :hover {
    background-color: #e4f0ff;
  }
`
