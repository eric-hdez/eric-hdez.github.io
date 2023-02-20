import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: '#252525', // '#dae3e6',
    },
    primary: {
      light: '#6a52b3',
      main: '#252525', // '#778492',
      dark: '#301b70',
      contrastText: '#fff',
    },
    secondary: {
      light: '#A092FF',
      main: '#8678F1', // '#66cb8c',
      dark: '#6D5FD8',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '"Trebuchet MS", "Verdana", sans-serif',
  },
});

// import { extendTheme } from '@mui/joy/styles';

// export default extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         background: {
//           body: 'var(--joy-palette-neutral-50)',
//         },
//       },
//     },
//     dark: {
//       palette: {
//         background: {
//           body: 'var(--joy-palette-common-black)',
//           surface: 'var(--joy-palette-neutral-900)',
//         },
//       },
//     },
//   },
// });
