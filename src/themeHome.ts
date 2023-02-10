import { Noto_Sans_JP} from '@next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const notoSansJp = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});


// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#001e3c',
    },
    secondary: {
      main: '#19857b',
    },
    background: {
      default: '#0A1929',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#f3f6f9',
      secondary: '#b2bac2'
    },
  },
  typography: {
    fontFamily: notoSansJp.style.fontFamily,
    fontSize: 16
  },
});

export default theme;
