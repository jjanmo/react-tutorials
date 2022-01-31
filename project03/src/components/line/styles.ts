import styled from 'styled-components';
import { ILineProps } from '../../interfaces';

export const StyledLine = styled.hr<ILineProps>`
  border: none;
  border-top: 3px double ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  overflow: visible;
  text-align: center;
  height: 5px;
  margin: 2rem 0;
  &::after {
    background: #fff;
    content: '${(props) => props.text}';
    padding: 0 4px;
    position: relative;
    top: -10px;
  }
`;
