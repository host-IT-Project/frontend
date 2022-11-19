import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { patchArticle } from '../api/article';
import { userSelector } from '../atom/userAtom';
import PageTemplate from '../template/PageTemplate';
import ProductCardHorizontal from "../components/ProductCardHoriz";

const MyPage = (props) => {
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) {
      navigate('/login');
    }
  }, []);

  return (
    <PageTemplate contents={<ProductCardHorizontal />}></PageTemplate>
  );
};

export default MyPage;
