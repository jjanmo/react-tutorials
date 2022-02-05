import React, { useState } from 'react';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/theme';
import GlobalStyles from './globalStyles';

const App = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router setIsDark={setIsDark} isDark={isDark} />
    </ThemeProvider>
  );
};

export default App;
