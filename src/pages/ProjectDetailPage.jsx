import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom.js";

// components import
import PageTemplate from "../template/PageTemplate";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/textEditor/TextViewer";
import { Paper } from "@mui/material";
import BackButton from "../components/common/BackButton";
import Spinner from "../components/common/Spinner";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin.js";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const { fetchUserInfo } = useLogin();
  const article = useRecoilValue(selectedArticleSelector(id));

  useEffect(() => {
    (async () => {
      await fetchUserInfo();
    })();
  }, []);

  return (
    <PageTemplate
      contents={
        <>{article ? <MainContents article={article} /> : <Spinner />}</>
      }
    ></PageTemplate>
  );
};

const MainContents = ({ article }) => {
  return (
    <>
      <BackButton />
      <ThumbnailImage
        src={article.thumbnail || `https://via.placeholder.com/690x400`}
        alt="post-thumbnail"
      />
      <ProjectInfoBox articleId={article.id} />
      <Paper elevation={5} sx={{ mt: 3, mb: 8, p: 5, borderRadius: 8 }}>
        <TextViewer data={article.content} />
      </Paper>
    </>
  );
};

const ThumbnailImage = styled.img`
  max-width: 100%;
  margin: 0px auto 0px;
  object-fit: contain;
  display: block;
`;

export default ProjectDetailPage;
