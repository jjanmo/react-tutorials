import React, { useCallback } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Line from '../line';
import coin from '../../assets/coin.png';
import { Ball, BodyContainer, Checkbox, HeaderContainer, HomeButton, ToggleButton, ToggleContainer } from './styles';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atom';

const Layout = () => {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const onClick = useCallback(() => {
    navigate('/');
  }, []);

  const onClickCheckbox = () => {
    setIsDark((prev: boolean) => !prev);
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
          <img src={coin} alt="coin" width="100px" />
          <div>COINS</div>
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
