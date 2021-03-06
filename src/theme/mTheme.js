import { createMuiTheme } from '@material-ui/core/styles';

const mTheme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#ee7000',
    },
    secondary: {
      main: '#1976D2',
    },
    // background: {
    //   default: '#000b1c',
    //   paper: '#001a42',
    // },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    fontFamily: 'sans-serif',
  },
});

export default mTheme;
