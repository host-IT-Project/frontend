import { ThemeProvider } from 'styled-components';
import './App.css';
import Routes from './pages/Routes';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme.light}>
            <GlobalStyles />
            <div className="App">
                <Routes />
            </div>
        </ThemeProvider>
    );
}

export default App;
