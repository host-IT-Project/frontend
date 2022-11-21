import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner";

const RedirectLogin = () => {
  const { handleLogin } = useAuth();

  useEffect(() => {
    handleLogin();
  }, []);

  return <Spinner />;
};

export default RedirectLogin;
