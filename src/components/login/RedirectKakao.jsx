import { useEffect } from 'react';
import useKakoAuth from '../../hooks/useKakaoAuth';
import LoadingSpinner from '../LoadingSpinner';

const RedirectLogin = () => {
  const { handleLogin } = useKakoAuth();
  useEffect(() => {
    handleLogin();
  }, []);

  return <LoadingSpinner />;
};

export default RedirectLogin;
