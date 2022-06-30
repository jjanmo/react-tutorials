import React from 'react';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyles from './globalStyles';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './recoil/atom';

const App = () => {
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
};

export default App;
