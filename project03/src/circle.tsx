import React from 'react';
import styled from 'styled-components';

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<CircleProps>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  &:active {
    opacity: 0.5;
  }
`;

const Circle = ({ bgColor }: CircleProps) => <Container bgColor={bgColor} />;

export default Circle;
