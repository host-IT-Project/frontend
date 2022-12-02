import React, {useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { curruntArticleSelector } from "../atom/articleAtom.js";

// components import
import PageTemplate from "../template/PageTemplate";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/textEditor/TextViewer";
import { CircularProgress, Paper } from "@mui/material";
import BackButton from "../components/common/BackButton";
import Spinner from "../components/common/Spinner";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin.js";

import axios from 'axios';

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  const { fetchUserInfo } = useLogin();
  const article = useRecoilValue(curruntArticleSelector(id));

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
  const [thumbnailImg, setThumbnailImg] = useState();

  useEffect(() => {    
    (async () => {
      await axios({
        method:'GET',
        url:article.thumbnail,
        responseType:'blob',}).then((response) => {
          console.log(response);
          const url = window.URL.createObjectURL(new Blob([response.data], { type: response.headers['content-type'] } ));
          console.log("url")
          console.log(url);
          setThumbnailImg(url);
        });  
    })();
  }, [])

  
  return (
    <>
      <BackButton />
      <ThumbnailImage
        src={thumbnailImg}
        alt="post-thumbnail"
      />
      <ProjectInfoBox article={article} />
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
