import { FC } from 'react'
import styled from 'styled-components'

interface Props {
  content: string
  isHeader?: boolean
}

const Cell: FC<Props> = ({ content, isHeader = false }) => {
  return <StyledCell isHeader={isHeader}>{content}</StyledCell>
}

export default Cell

const StyledCell = styled.div<{ isHeader: boolean }>`
  min-width: 100px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isHeader }) => (isHeader ? '#f0f0f0' : '#fff')};
`
