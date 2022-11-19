import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userSelector } from '../atom/userAtom';
import LoadingSpinner from '../components/LoadingSpinner';

const LogoutPage = (props) => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userSelector);

  useEffect(() => {
    (async () => {
      await setUser({ isLogin: false });
      navigate('/home');
    })();
  }, []);

  <LoadingSpinner />;
};
export default LogoutPage;
