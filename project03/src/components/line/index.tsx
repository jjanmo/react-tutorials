import React from 'react';
import { StyledLine } from './styles';
import { ILineProps } from '../../interfaces';

const Line = ({ text }: ILineProps) => {
  return <StyledLine text={text} />;
};

export default Line;
