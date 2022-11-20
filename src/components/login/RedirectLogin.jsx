import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../LoadingSpinner";

const RedirectLogin = () => {
  const { handleLogin } = useAuth();
  useEffect(() => {
    handleLogin();
  }, []);

  return <LoadingSpinner />;
};

export default RedirectLogin;
