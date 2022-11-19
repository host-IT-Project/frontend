import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getArticle } from "../api/article";
import BackButton from "../components/BackButton";
import EditForm from "../components/EditForm";

import PageTemplate from "../template/PageTemplate";

const EditPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const editMode = id ? "patch" : "post";

  const [article, setArticle] = useState();

  useEffect(() => {
    if (id !== null) {
      (async function _getArticles() {
        const response = await getArticle(id.toString());
        const result = response.data.article;
        setArticle(result);
      })();
    }
  }, [id]);

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
      <EditForm editMode={editMode} />
    </>
  );
};

export default EditPage;
