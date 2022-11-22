import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { selectedArticleSelector } from "../atom/articleAtom.js";

// components import
import PageTemplate from "../template/PageTemplate";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/TextViewer";
import { Paper } from "@mui/material";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin.js";
import { userSelector } from "../atom/userAtom.js";
import { isAdmin } from "../util/admin.js";
import { isAvailable } from "../util/open.js";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const { fetchUserInfo } = useLogin();
  const user = useRecoilValue(userSelector);
  const article = useRecoilValue(selectedArticleSelector(id));
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await fetchUserInfo();
    })();

    /**
     * 전시회 이후 공개됩니다.
     */
    if (
      article.articleCategory !== "공지" &&
      article.user.id !== user.id &&
      !isAdmin(user.username) &&
      !isAvailable()
    ) {
      navigate("/yet", { replace: true });
    }
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
