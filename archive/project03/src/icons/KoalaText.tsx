import COLOR from '@style/colors'
import styled, { keyframes } from 'styled-components'

function KoalaText() {
  return (
    <SVG x="0" y="0" width="200" height="60" viewBox="0 0 200 60">
      <text x="4" y="65%">
        K
      </text>
      <text x="20" y="65%">
        O
      </text>
      <text x="38" y="65%">
        A
      </text>
      <text x="56" y="65%">
        L
      </text>
      <text x="70" y="65%">
        A
      </text>
      <text x="94" y="65%">
        T
      </text>
      <text x="108" y="65%">
        A
      </text>
      <text x="126" y="65%">
        L
      </text>
      <text x="140" y="65%">
        K
      </text>
      <text x="158" y="65%">
        S
      </text>
    </SVG>
  )
}

export default KoalaText

const stroke = keyframes`
    0%{
      stroke-dashoffset: 140px;
    }
    100%{
      stroke-dashoffset: 0px;
    }
`

const SVG = styled.svg`
  & text {
    font-size: 2.5rem;
    font-weight: 600;
    fill: ${COLOR.PRIMARY_080};
    stroke: ${COLOR.PRIMARY_060};
    stroke-width: 2px;
    stroke-dasharray: 70px;
    stroke-dashoffset: 70px;
    animation: ${stroke} 3s linear infinite;
  }
`
