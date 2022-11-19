import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../api/article";
import styled from "styled-components";

// components import
import PageTemplate from "../template/PageTemplate";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/TextViewer";
import { Paper } from "@mui/material";
import BackButton from "../components/BackButton";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    (async function _getArticles() {
      const response = await getArticle(id.toString());
      const result = response.data.article;
      setArticle(result);
    })();
  }, [id]);

  return (
    <PageTemplate
      contents={article && <MainContents article={article} />}
    ></PageTemplate>
  );
};

const MainContents = ({ article }) => (
  <>
    <Link to="/archive">
      <BackButton />
    </Link>
    <ThumbnailImage
      src="https://via.placeholder.com/690x400"
      alt="post-thumbnail"
    />
    <ProjectInfoBox article={article} />
    <Paper elevation={5} sx={{ mt: 3, mb: 8, p: 5, borderRadius: 8 }}>
      <TextViewer data={article.content} />
    </Paper>
  </>
);

const ThumbnailImage = styled.img`
  max-width: 100%;
  margin: 0px auto 0px;
  object-fit: contain;
  display: block;
`;

export default ProjectDetailPage;
