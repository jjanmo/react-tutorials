import COLOR from 'style/colors';
import styled, { keyframes } from 'styled-components';

function KoalaText() {
  return (
    <SVG width="250" height="60" viewBox="0 0 250 60">
      <text x="0" y="50%">
        K
      </text>
      <text x="25" y="50%">
        O
      </text>
      <text x="53" y="50%">
        A
      </text>
      <text x="80" y="50%">
        L
      </text>
      <text x="103" y="50%">
        A
      </text>
      <text x="140" y="50%">
        T
      </text>
      <text x="160" y="50%">
        A
      </text>
      <text x="185" y="50%">
        L
      </text>
      <text x="205" y="50%">
        K
      </text>
      <text x="230" y="50%">
        S
      </text>
    </SVG>
  );
}

export default KoalaText;

const stroke = keyframes`
    0%{
      stroke-dashoffset: 140px;
    }
    100%{
      stroke-dashoffset: 0px;
    }
`;

const SVG = styled.svg`
  transform: translateY(25%);

  & text {
    font-size: 4rem;
    font-weight: 700;
    fill: ${COLOR.PRIMARY_080};
    stroke: ${COLOR.PRIMARY_060};
    stroke-width: 3px;
    stroke-dasharray: 70px;
    stroke-dashoffset: 70px;
    animation: ${stroke} 3s linear infinite;
  }
`;
