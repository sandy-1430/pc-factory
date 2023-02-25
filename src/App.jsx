
import './styles/base.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Typography } from '@mui/material';


const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#FFE715',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Lato',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h1" component="h2">
          h1. Heading
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
