import COLORS from '@style/colors'
import styled from 'styled-components'

const HEAD_HEIGHT = '15'
export const Container = styled.div`
  width: 100%;
  height: calc(99vh - ${HEAD_HEIGHT}rem);
  padding-top: 18rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLORS.PRIMARY_030};
  border-radius: 10px;
`
