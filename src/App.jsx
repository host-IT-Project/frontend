import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

function App() {
    return (
        <ThemeProvider theme={theme.light}>
            <div className="App">
                <GlobalStyles />
                <Header />
            </div>
        </ThemeProvider>
    );
}

export default App;
