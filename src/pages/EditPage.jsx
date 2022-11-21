import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom";
import { userSelector } from "../atom/userAtom";
import BackButton from "../components/BackButton";
import EditForm from "../components/EditForm";
import useLogin from "../hooks/useLogin";

import PageTemplate from "../template/PageTemplate";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { fetchUserInfo } = useLogin();

  const id = searchParams.get("id");
  const editMode = id ? "patch" : "post";

  const article = useRecoilValue(selectedArticleSelector(id));
  const user = useRecoilValue(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
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
