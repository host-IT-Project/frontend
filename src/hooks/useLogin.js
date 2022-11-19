import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { apis } from '../../apis';
import { AxiosError } from 'axios';
import { setItemToLS } from '../util/localstorage';

function useLogin() {
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const result = await apis.signIn(data);
      const accessToken = result.data.accessToken.split(' ')[1];
      const refreshToken = result.data.refreshToken;
      setTokens(accessToken, refreshToken);

      await fetchUserInfo();
      navigate('/home');
    } catch (e) {
      if (e instanceof AxiosError) {
        alert(e.response?.data);
      }
    }
  };

  const fetchUserInfo = useCallback(async () => {
    try {
      const userInfo = await apis
        .getUser() //
        .then((res) => res.data);

      // set userAtom
      // const { id, draw, lose, win, nickname, profileImgUrl } = userInfo;
      // dispatch(login({ isLogin: true, id, draw, lose, win, nickname, profileImgUrl }));
      return { msg: '유저 정보를 불러오고 로그인 되었습니다', res: true };
    } catch (e) {
      return { msg: '유저정보를 불러오는데 실패하였습니다', res: false };
    }
  }, []);

  const setTokens = useCallback((accessToken, refreshToken) => {
    setItemToLS('accessToken', accessToken);
    setItemToLS('refreshToken', refreshToken);
  }, []);

  return { handleLogin, fetchUserInfo, setTokens };
}

export default useLogin;
