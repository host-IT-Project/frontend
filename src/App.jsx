import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { userSelector } from "./atom/userAtom";
import Routes from "./pages/Routes";
import { GlobalStyles } from "./styles/global";
import theme from "./styles/theme";
import { getItemFromLS } from "./util/localstorage";

function App() {
  const [user, setUser] = useRecoilState(userSelector);

  useEffect(() => {
    /**
     * @TODO
     * accessToken의 유효기간이 지났을 수 있으므로 새로운 accessToken을 받아야 합니다.
     * getAccessToek(accessToken, refreshToken)
     */
    if (!user.isLogin && getItemFromLS("accessToken")) {
      setUser({ isLogin: true });
    }
  }, []);

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
