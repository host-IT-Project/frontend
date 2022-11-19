import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Routes from './pages/Routes';
import { GlobalStyles } from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme.light}>
          <GlobalStyles />
          <div className="App">
            <Routes />
          </div>
        </ThemeProvider>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
