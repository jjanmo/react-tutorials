import React from 'react';
import { StyledLine } from './styles';

interface IProps {
  text: string;
}

const Line = ({ text }: IProps) => {
  return <StyledLine text={text} />;
};

export default Line;
