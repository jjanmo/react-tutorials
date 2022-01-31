import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { BodyContainer, HeaderContainer, HomeButton, StyledLine } from './styles';
import coins from '../../assets/coins.png';

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
      <StyledLine />
      <BodyContainer>
        <Outlet />
      </BodyContainer>
    </div>
  );
};

export default Layout;
