import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#252525', // '#dae3e6',
    },
    primary: {
      light: '#6a52b3',
      main: '#252525',//'#778492',
      dark: '#301b70',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#8678F1', // '#66cb8c',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Verdana", sans-serif',
  },
});
