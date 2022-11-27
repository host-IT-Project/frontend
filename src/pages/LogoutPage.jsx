import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userSelector } from "../atom/userAtom";
import Spinner from "../components/common/Spinner";
import { removeItemFromLS } from "../util/localstorage";

const LogoutPage = (props) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userSelector);

  useEffect(() => {
    (async () => {
      removeItemFromLS("accessToken");
      await setUser({ isLogin: false });
      navigate("/home");
    })();
  }, []);

  <Spinner />;
};
export default LogoutPage;
