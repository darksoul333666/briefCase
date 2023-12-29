import { createTheme } from '@mui/material/styles';


const lightTheme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
    },
    primary: {
      main: '#000000',
    }
  }
});

const darkTheme = createTheme({
  typography: {
    fontFamily: 'Nunito, sans-serif',
  },
  palette: {
    mode: 'dark',
    action: {
      active: '#ffffff',
      hover: 'rgba(255, 255, 255, 0.08)',
    },
    background: {
      default: '#082126'
    },
    primary: {
      main: '#ffffff',
    }
  }
});

export { lightTheme, darkTheme };
