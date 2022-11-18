import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../api/article";
import ProjectInfoBox from "../components/ProjectInfoBox";
import TextViewer from "../components/TextViewer";
import PageTemplate from "../template/PageTemplate";
import { Paper } from "@mui/material";
import styled from "styled-components";

const ProjectDetailPage = (props) => {
  let { id } = useParams();
  //   const [article, setArticle] = useState();

  //   useEffect(() => {
  //     (async function fetchData() {
  //       const articles = await getArticles();
  //       setArticle(articles[id]);
  //     })();
  //     console.log(article);
  //   }, [article, id]);

  // 더미데이터
  const article = {
    id: 2,
    title: "게시글2 제목입니다!!",
    content: "게겍게겍ㄲ",
    likesCount: 5,
    dislikesCount: 0,
    articleCategory: "잡담",
    createdAt: "2022-10-14T05:21:13",
    user: {
      id: 1,
      username: "게시글 작성자",
      profileImgUrl: "tester photo",
    },
    hashtagList: ["C#", "팀플"],
  };

  return (
    <PageTemplate contents={<MainContents article={article} />}></PageTemplate>
  );
};

const MainContents = ({ article }) => {
  // 에디터 글양식
  const initialContent = [
    "## 팀 소개 및 역할 분담",
    "",
    "프로젝트에 참여한 사람의 **학번**, **이름**과 함께 각각 어떤 역할을 맡았는지 작성해 주세요.",
    "",
    "예 )",
    "",
    "- 20220000 김** - 기획 및 UI/UX 디자인",
    "- 20210000 박** - 개발 일정 관리 및 퍼블리싱, 상품 업로드 및 좋아요 기능 프론트엔드 구현",
    "- 20200000 이** - 팀 워크스페이스 관리 및 DB 설계, 백엔드 개발",
    "",
    "## 개요",
    "",
    "어떤 프로젝트를 진행했는지 간략하게 소개해 주세요.",
    "",
    "## 기술 스택",
    "",
    "프로젝트에 사용한 기술들을 소개해 주세요.",
    "",
    "예 ) 언어, 라이브러리, 프레임워크, 디자인 툴, 협업 툴 등",
    "",
    "- 언어 : C#, Java, 스크래치, 앱인벤터 ...",
    "- 라이브러리 : React, JQuery ...",
    "- 협업 툴 : Notion, 카카오톡, Slack ...",
    "",
    "## 주요 기능 소개",
    "",
    "프로젝트의 주된 기능들을 소개해 주세요.",
    "",
    "**실제로 구동되는 이미지를 최소 2개 이상** 첨부해 주세요.",
    "",
    "## 문제해결 경험 및 느낀 점",
    "",
    "프로젝트를 진행하며 어떤 기술적 문제나 협업에서의 어려움 등을 겪었고 그것을 풀어내기 위해 어떤 시도를 해보았는지,",
    ,
    "그리고 어떤 점들을 배웠는지 등에 대해 작성해주세요.",
    "",
    "## 프로젝트 코드",
    "",
    "[깃허브](https://github.com/)에 프로젝트 전체 코드를 올려 repository url을 제출해주세요.",
    "앱인벤터, 스크래치 프로젝트의 경우 해당 프로젝트의 url을 제출하시면 됩니다.",
  ].join("\n");

  return (
    <>
      <ThumbnailImage
        src="https://via.placeholder.com/690x400"
        alt="post-thumbnail"
      />
      <ProjectInfoBox article={article} />
      <Paper elevation={5} sx={{ mt: 3, mb: 8, p: 5, borderRadius: 8 }}>
        <TextViewer data={initialContent} />
      </Paper>
      footer
    </>
  );
};

const ThumbnailImage = styled.img`
  width: 100%;
  margin: 0px auto 0px;
  height: auto;
  object-fit: contain;
  display: block;
`;

export default ProjectDetailPage;
