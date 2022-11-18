import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticle } from "../api/article";
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
    <PageTemplate>
      EditPage
      <div>id: {id}</div>
      <div>editMode: {editMode}</div>
      {editMode === "post" ? (
        <EditForm editMode={editMode} />
      ) : (
        article && <EditForm editMode={editMode} initialArticle={article} />
      )}
    </PageTemplate>
  );
};

export default EditPage;
