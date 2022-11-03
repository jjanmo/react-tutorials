import styled from 'styled-components';

export const Scene = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  perspective: 600px;
`;
export const Card = styled.div<{ x?: number; y?: number }>`
  width: 330px;
  height: 462px;
  border-radius: 10px;
  overflow: hidden;

  transform-style: preserve-3d;
  transform-origin: center center;

  transform: ${({ x, y }) => `rotateX(${x}deg) rotateY(${y}deg)`};
`;
export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/images/back.jpg) no-repeat center
    center;
  background-size: contain;
`;

export const Front = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${process.env.PUBLIC_URL}/images/front.png) no-repeat center
    center;
  background-size: contain;
`;
