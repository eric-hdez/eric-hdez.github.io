import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#DAE3E6',
    },
    primary: {
      light: '#6a52b3',
      main: '#778492',
      dark: '#301b70',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#B8ACDA', // '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Verdana", sans-serif',
  },
});

    //   light: '#5a48a7',
    //   main: '#311b92',
    //   dark: '#221266',