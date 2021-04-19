import React, { useContext, useEffect } from 'react';

import '../assets/style.css';
import { ThemeContext } from '../theme/themeContext';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { Route, Switch, useLocation } from 'react-router-dom';
import CustomBar from './CustomBar';
import Top from '../pages/Top';
import Samples from '../pages/Samples';
import MemoView from './MemoView';
import ModalMemoEdit from './ModalMemoEdit';
import ModalMemoAdd from './ModalMemoAdd';

const App = () => {
  const context = useContext(ThemeContext);
  useEffect(() => {
    const themeName = localStorage.getItem('theme');
    if (themeName !== null) {
      context.handleThemeChange(themeName);
    }
  }, [context]);

  const location = useLocation();
  const background = location.state?.background;

  return (
    <ThemeProvider theme={context.theme}>
      <CssBaseline />
      <CustomBar />
      <Container maxWidth='lg'></Container>
      {/* testmodal */}
      <Switch location={background || location}>
        <Route exact path='/'>
          <Top />
        </Route>
        <Route exact path='/memo/:id'>
          <MemoView />
        </Route>
      </Switch>
      <Switch>
        {background && (
          <Route exact path='/memo/new'>
            <ModalMemoAdd />
          </Route>
        )}
        {background && (
          <Route exact path='/memo/:id'>
            <ModalMemoEdit />
          </Route>
        )}
      </Switch>
    </ThemeProvider>
  );
};

export default App;
