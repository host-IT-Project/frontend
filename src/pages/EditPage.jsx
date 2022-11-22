import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom";
import { userSelector } from "../atom/userAtom";
import BackButton from "../components/BackButton";
import EditForm from "../components/EditForm";
import useLogin from "../hooks/useLogin";

import PageTemplate from "../template/PageTemplate";
import { isAdmin } from "../util/admin";
import checkTime from "../util/uploadLimit";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchUserInfo } = useLogin();

  const id = searchParams.get("id");
  const editMode = id ? "patch" : "post";

  const article = useRecoilValue(selectedArticleSelector(id));
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  const checkTimeLimit = () => {
    const now = new Date();

    if (!checkTime(now)) {
      window.alert(
        "2022년 11월 23일 오전 11시 이후부터 글을 수정하거나 등록할 수 없습니다."
      );
      navigate(-1);
      return;
    }
  };

  useEffect(() => {
    if (!isAdmin(user.username)) {
      checkTimeLimit();
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
      contents={<EditPageContents editMode={editMode} article={article} />}
    ></PageTemplate>
  );
};

const EditPageContents = ({ editMode, article }) => {
  const formSetting = {
    editMode: editMode,
  };

  if (editMode === "patch") {
    formSetting.article = article;
  }

  return (
    <>
      <BackButton />
      <EditForm editMode={editMode} initialArticle={article} />
    </>
  );
};

export default EditPage;
