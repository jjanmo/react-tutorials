import COLORS from '@style/colors'
import styled from 'styled-components/macro'

const HEAD_HEIGHT = 6
export const Container = styled.div`
  width: 100%;
  min-height: calc(95vh - ${HEAD_HEIGHT}rem);
  padding: 2rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${COLORS.PRIMARY_030};
  border-radius: 0.5rem;
  background-color: #f7f1e3;
`
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  font-size: 1.8rem;
  border: 1px solid ${COLORS.PRIMARY_030};
`
export const InputButton = styled.input`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 5px;
  border: none;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PRIMARY_050};
  cursor: pointer;
`
