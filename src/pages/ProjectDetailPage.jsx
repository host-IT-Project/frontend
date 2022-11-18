import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getArticle } from "../api/article";
import styled from "styled-components";

// components import
import PageTemplate from "../template/PageTemplate";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/TextViewer";
import { Button, Paper } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const [article, setArticle] = useState();

  console.log("parm: ", id);
  useEffect(() => {
    (async function _getArticles() {
      const response = await getArticle(id.toString());
      const result = response.data.article;
      setArticle(result);
    })();
  }, [article, id, setArticle]);

  return (
    <PageTemplate contents={<MainContents article={article} />}></PageTemplate>
  );
};

const MainContents = ({ article }) => (
  <>
    <Link to="/archive">
      <BackButton variant="text" startIcon={<ArrowBackIcon />}>
        목록으로 돌아가기
      </BackButton>
    </Link>
    <ThumbnailImage
      src="https://via.placeholder.com/690x400"
      alt="post-thumbnail"
    />
    <ProjectInfoBox article={article} />
    <Paper elevation={5} sx={{ mt: 3, mb: 8, p: 5, borderRadius: 8 }}>
      <TextViewer data={article.content} />
    </Paper>
    footer
  </>
);

const ThumbnailImage = styled.img`
  width: 100%;
  margin: 0px auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
`;

const BackButton = styled(Button)`
  margin-bottom: 1rem;
  transition: all 0.5s;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.darkgray};

  &:hover {
    transform: scale(1.05);
  }
`;

export default ProjectDetailPage;
