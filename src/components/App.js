import React, { useContext, useEffect } from 'react';
import Footer from './Footer';
import AddMemo from '../containers/AddMemo';
import VisibleMemoList from '../containers/VisibleMemoList';

import '../assets/style.css';
import { Header2 } from './Header';
import { ThemeContext } from '../theme/themeContext';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import CustomBar from './CustomBar';

const App = () => {
  const context = useContext(ThemeContext);
  useEffect(() => {
    const themeName = localStorage.getItem('theme');
    if (themeName !== null) {
      context.handleThemeChange(themeName);
    }
  }, [context]);

  return (
    <ThemeProvider theme={context.theme}>
      <CssBaseline />
      <CustomBar />
      <Container maxWidth='sm'>
        {/* <Header2 /> */}
        <main className='c-main'>
          <AddMemo />
          <VisibleMemoList />
        </main>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
