import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import { getUserInfo } from "../api/user";
import { userSelector } from "../atom/userAtom";
import { setItemToLS } from "../util/localstorage";

function useLogin() {
  const setUserInfo = useSetRecoilState(userSelector);

  const fetchUserInfo = useCallback(async (token) => {
    try {
      const { data } = await getUserInfo();
      setUserInfo({ isLogin: true, ...data });
      return { msg: "유저 정보를 불러오고 로그인 되었습니다", res: true };
    } catch (e) {
      return { msg: "유저정보를 불러오는데 실패하였습니다", res: false };
    }
  }, []);

  const setTokens = useCallback((accessToken, refreshToken) => {
    setItemToLS("accessToken", accessToken);
    setItemToLS("refreshToken", refreshToken);
  }, []);

  return { setTokens, fetchUserInfo };
}

export default useLogin;
