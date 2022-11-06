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
export const Illusion = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${process.env.PUBLIC_URL}/images/illusion.png),
    repeating-linear-gradient(
      0deg,
      rgb(255, 119, 115) calc(var(--space) * 1),
      rgba(255, 237, 95, 1) calc(var(--space) * 2),
      rgba(168, 255, 95, 1) calc(var(--space) * 3),
      rgba(131, 255, 247, 1) calc(var(--space) * 4),
      rgba(120, 148, 255, 1) calc(var(--space) * 5),
      rgb(216, 117, 255) calc(var(--space) * 6),
      rgb(255, 119, 115) calc(var(--space) * 7)
    ),
    repeating-linear-gradient(
      var(--angle),
      #0e152e 0%,
      hsl(180, 10%, 60%) 3.8%,
      hsl(180, 29%, 66%) 4.5%,
      hsl(180, 10%, 60%) 5.2%,
      #0e152e 10%,
      #0e152e 12%
    ),
    radial-gradient(
      farthest-corner circle at var(--mx) var(--my),
      rgba(0, 0, 0, 0.1) 12%,
      rgba(0, 0, 0, 0.15) 20%,
      rgba(0, 0, 0, 0.25) 120%
    );
`;
