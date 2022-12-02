import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { curruntArticleSelector } from "../atom/articleAtom";
import { userSelector } from "../atom/userAtom";
import BackButton from "../components/common/BackButton";
import EditForm from "../components/edit/EditForm";
import useLogin from "../hooks/useLogin";

import PageTemplate from "../template/PageTemplate";
import { isAdmin } from "../util/admin";
import checkTime from "../util/uploadLimit";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchUserInfo } = useLogin();

  const id = searchParams.get("id");
  const EDIT_MODE = id ? "patch" : "post";

  const article = useRecoilValue(curruntArticleSelector(id));
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const checkTimeLimit = () => {
    const now = new Date();

    if (!checkTime(now)) {
      window.alert(
        "2022년 11월 23일 오전 11시 이후부터 글을 등록할 수 없습니다."
      );
      navigate(-1);
      return;
    }
  };

  useEffect(() => {
    if (!isAdmin(user.username)) {
      if (EDIT_MODE === "post") checkTimeLimit();
    }
    if (!user.isLogin) {
      (async () => {
        await fetchUserInfo();
      })();
      if (!user.isLogin) {
        navigate("/login");
      }
    }
  }, []);

  return (
    <PageTemplate
      contents={<EditPageContents EDIT_MODE={EDIT_MODE} article={article} />}
    ></PageTemplate>
  );
};

const EditPageContents = ({ EDIT_MODE, article }) => {
  const formSetting = {
    EDIT_MODE: EDIT_MODE,
  };

  if (EDIT_MODE === "patch") {
    formSetting.article = article;
  }

  return (
    <>
      <BackButton />
      <EditForm EDIT_MODE={EDIT_MODE} initialArticle={article} />
    </>
  );
};

export default EditPage;
