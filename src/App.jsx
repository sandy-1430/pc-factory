
import './styles/base.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';


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
      'Audiowide',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
