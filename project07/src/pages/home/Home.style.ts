import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: radial-gradient(ellipse at bottom, #1b2735, #090a0f);
`;
export const Scene = styled.div`
  display: flex;

  transform-style: preserve-3d;
  perspective: 300px;
`;
export const Item = styled.div`
  position: relative;
  width: 20rem;
  height: 15rem;
  margin: 2rem;

  border-radius: 10px;
  overflow: hidden;

  transition: all 1.3s ease-out;
  transform-style: preserve-3d;
  transform: rotateX(20deg);
  transform-origin: center center;

  &:hover {
    transform: rotateX(0deg);
  }
`;
export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  border: 1px solid #fff;
  box-shadow: 0 0 20px 5px rgba(100, 100, 255, 0.4);
`;
export const Guide = styled.div`
  width: 100%;
  height: 100%;

  background-color: #303050;
  background-image: radial-gradient(circle at center top, #cce, #33a);

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 3rem;
  font-weight: 300;
`;
