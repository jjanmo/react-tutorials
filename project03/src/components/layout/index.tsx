import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import coins from '../../assets/coins.png';
import Line from '../line';
import { Ball, BodyContainer, Checkbox, HeaderContainer, HomeButton, ToggleButton, ToggleContainer } from './styles';

const Layout = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/');
  }, []);

  const onClickCheckbox = () => {
    console.log('checked');
  };

  return (
    <div>
      <ToggleContainer>
        <ToggleButton htmlFor="toggle">
          <div>🌜</div>
          <div>🌞</div>
          <Checkbox type="checkbox" id="toggle" onClick={onClickCheckbox} />
          <Ball></Ball>
        </ToggleButton>
      </ToggleContainer>
      <HeaderContainer>
        <HomeButton onClick={onClick}>
          <img src={coins} alt="coins" width="100%" />
        </HomeButton>
      </HeaderContainer>
      <Line text="§" />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </div>
  );
};

export default Layout;
