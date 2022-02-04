import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;

export const HomeButton = styled.button`
  all: unset;
  width: 50%;
  cursor: pointer;
`;

export const BodyContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`;

export const ToggleContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ToggleButton = styled.label`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: #4d4d4d;
  display: flex;
  position: relative;
  font-size: 28px;
  cursor: pointer;
  & > div {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > div:first-child {
    position: absolute;
    left: 3px;
    top: 3px;
  }
  & > div:nth-child(2) {
    position: absolute;
    right: 3px;
    top: 3px;
  }
  & > div:nth-child(3) {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: white;
  }
`;

export const Ball = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: #fdcb6e 0 0 5px 5px;
  }
`;

export const Checkbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;

  &:checked + ${Ball} {
    transform: translateX(40px);
  }
`;
