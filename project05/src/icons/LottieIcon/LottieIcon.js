import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

function LottieIcon({ type, size, target }) {
  const containerElem = useRef();

  useEffect(() => {
    lottie.loadAnimation({
      container: containerElem.current,
      renderer: 'svg',
      autoplay: false,
      animationData: require(`../../assets/lotties/${type}.json`),
    });
  }, []);

  const handleMouseEnter = () => {
    console.log('aaa');
    lottie.play();
  };
  const handleMouseLeave = () => {
    lottie.pause();
  };

  return (
    <Container
      ref={containerElem}
      size={size}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></Container>
  );
}

export default LottieIcon;

const Container = styled.div`
  width: 100%;
  height: ${({ size }) => size && `${size}rem`};
`;
