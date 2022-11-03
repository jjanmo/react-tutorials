import styled from 'styled-components';

export const Scene = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 330px;
  height: 462px;
  border-radius: 10px;
  overflow: hidden;

  perspective: 600px;
`;
export const Card = styled.div`
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
`;
export const Back = styled.div<{ x?: number; y?: number }>`
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/images/back.jpg) no-repeat center
    center;
  background-size: contain;

  transform: ${({ x, y }) => `rotate3d(${x} / 165, ${y} / 231, 0)`};
`;

export const Front = styled.div`
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/images/front.png) no-repeat center
    center;
  background-size: contain;
`;
