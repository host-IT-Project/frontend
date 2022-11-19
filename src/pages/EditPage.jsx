import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom";
import BackButton from "../components/BackButton";
import EditForm from "../components/EditForm";

import PageTemplate from "../template/PageTemplate";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const editMode = id ? "patch" : "post";
  const article = useRecoilValue(selectedArticleSelector(id));

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
      <Link to="/archive">
        <BackButton />
      </Link>
      <EditForm editMode={editMode} initialArticle={article} />
    </>
  );
};

export default EditPage;
