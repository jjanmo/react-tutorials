import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BodyContainer, HeaderContainer, HomeButton } from './styles';
import coins from '../../assets/coins.png';
import Line from '../line';

const Layout = () => {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/');
  }, []);

  return (
    <div>
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
