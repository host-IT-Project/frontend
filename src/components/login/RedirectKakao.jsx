import { useEffect } from "react";
import useKakoAuth from "../../hooks/useKakaoAuth";
import Spinner from "../Spinner";

const RedirectLogin = () => {
  const { handleLogin } = useKakoAuth();
  useEffect(() => {
    handleLogin();
  }, []);

  return <Spinner />;
};

export default RedirectLogin;
