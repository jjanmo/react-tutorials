import COLORS from '@style/colors'
import styled from 'styled-components/macro'
import * as CS from '../commom.style'

export const Form = styled.form`
  width: 100%;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`
export const SubmitButton = styled(CS.InputButton)`
  margin-top: 1rem;
  align-self: flex-end;
`
export const SpinnerBox = styled.div`
  width: 10rem;
  height: 4.3rem;
  margin-top: 1rem;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${COLORS.PRIMARY_050};
`

export const Divider = styled.div`
  position: relative;
  width: 100%;
  margin: 3rem auto;
  text-align: center;
  font-size: 2rem;
  color: ${COLORS.PRIMARY_040};

  &::before {
    content: '';
    width: 43%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background-color: ${COLORS.PRIMARY_030};
    border-radius: 1rem;
  }
  &::after {
    content: '';
    width: 43%;
    height: 2px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: ${COLORS.PRIMARY_030};
    border-radius: 1rem;
  }
`
export const ButtonWrapper = styled.ul`
  width: 80%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
