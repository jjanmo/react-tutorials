import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`;

export const HomeButton = styled.button`
  all: unset;
  width: 50%;
  cursor: pointer;
`;

export const StyledLine = styled.hr`
  border: none;
  border-top: 3px double ${(props) => props.theme.textColor};
  color: #333;
  overflow: visible;
  text-align: center;
  height: 5px;
  &::after {
    background: #fff;
    content: '§';
    padding: 0 4px;
    position: relative;
    top: -10px;
  }
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;
