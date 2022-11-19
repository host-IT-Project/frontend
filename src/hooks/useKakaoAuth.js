import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { SERVER_URL } from '../../apis';
import useLogin from './useLogin';

const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

function useKakoAuth() {
  const location = useLocation();
  const navigate = useNavigate();
  const { setTokens, fetchUserInfo } = useLogin();

  const handleRouteKakaoLoginPage = useCallback(async () => {
    window.location.href = `${SERVER_URL}/oauth2/authorization/kakao?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  }, []);

  const handleKakaoLogin = useCallback(async () => {
    const parsed = location.search.split(/(\w+=[\w.-]+)/g);
    const accessToken = parsed[1].split('=')[1];
    const refreshToken = parsed[3].split('=')[1];
    const isFirst = parsed[5].split('=')[1];

    setTokens(accessToken, refreshToken);
    await fetchUserInfo();

    return navigate('/home');
  }, []);

  return { handleRouteKakaoLoginPage, handleKakaoLogin };
}

export default useKakoAuth;
