import { useCallback } from 'react';
import { setItemToLS } from '../util/localstorage';

function useLogin() {
  const fetchUserInfo = useCallback(async (token) => {
    try {
      // const userInfo = await getKakaoUser(token); //
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

  return { setTokens, fetchUserInfo };
}

export default useLogin;
