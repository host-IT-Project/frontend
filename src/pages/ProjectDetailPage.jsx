import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api/article";
import ProjectInfoBox from "../components/ProjectInfoBox";
import PageTemplate from "../template/PageTemplate";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    (async function fetchData() {
      const articles = await getArticles();
      setArticle(articles[id]);
    })();
    console.log(article);
  }, [article, id]);

  return (
    <PageTemplate>
      <div>
        <ProjectInfoBox />
      </div>
    </PageTemplate>
  );
};

export default ProjectDetailPage;
