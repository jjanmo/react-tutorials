import COLOR from '@style/colors'
import styled, { css, keyframes } from 'styled-components'

export default function Spinner({ size = 2 }) {
  return <SpinnerContainer size={size} />
}

const rotation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const SpinnerContainer = styled.div<{ size: number }>`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid #fff;
  border-bottom-color: ${COLOR.PRIMARY_050};
  animation: ${rotation} 1s linear infinite;

  ${({ size }) =>
    css`
      width: ${size}rem;
      height: ${size}rem;
    `}
`
