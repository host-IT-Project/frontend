import { ThemeProvider } from 'styled-components';
import './App.css';
import HomePage from './pages/HomePage';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme.light}>
            <GlobalStyles />
            <div className="App">
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
