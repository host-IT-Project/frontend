import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";
import useLogin from "./useLogin";

function useAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTokens, fetchUserInfo } = useLogin();

  const handleLogin = useCallback(async () => {
    const parsed = location.search.split(/(\w+=[\w.-]+)/g);
    const accessToken = parsed[1].split("=")[1]; //jwt token
    // const refreshToken = parsed[3].split('=')[1];
    // const isFirst = parsed[5].split('=')[1];

    setTokens(accessToken);
    await fetchUserInfo(accessToken);

    return navigate("/home");
  }, []);

  return { handleLogin };
}

export default useAuth;
