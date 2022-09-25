import styled from 'styled-components';

export const StyledLine = styled.hr<{ text: string }>`
  border: none;
  border-top: 3px double ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  overflow: visible;
  text-align: center;
  height: 5px;
  margin: 2rem 0;
  &::after {
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    content: '${(props) => props.text}';
    padding: 0 4px;
    position: relative;
    top: -10px;
  }
`;
