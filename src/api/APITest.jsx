import React, { useEffect } from "react";
import {
  deleteArticle,
  getArticles,
  getArticle,
  patchArticle,
  postArticle,
} from "./article";
import { getUserInfo, getMyArticles } from "./user";

const APITest = (props) => {
  useEffect(() => {
    // user
    // (async function _getUserInfo() {
    //   const info = await getUserInfo();
    //   info && console.log(info);
    // })();

    (async function _getMyArticles() {
      const articles = await getMyArticles();
      articles && console.log(articles);
    })();

    // article
    // (async function _getArticles() {
    //   const articles = await getArticles({ page: 2, order: "likes" });
    //   // articles && console.log(articles);
    // })();

    // (async function _getArticle() {
    //   const article = await getArticle("10");
    //   //   article && console.log(article);
    // })();

    // (async function _postArticle() {
    //   const response = await postArticle({
    //     title: "컴공전시회 with 호잇",
    //     description: "자신이 만든 프로젝트를 자랑해보세요.",
    //     content:
    //       "## 호잇\n프로젝트 아카이빙 사이트 호잇이 부산외국어대학교 컴퓨터공학과와 함께 전시회를 준비했습니다.",
    //     hashtagList: [
    //       "컴공전시회",
    //       "React",
    //       "HTML/CSS",
    //       "Java",
    //       "SpringBoot",
    //       "Heroku",
    //     ],
    //     thumbnail:
    //       "https://res.cloudinary.com/dqg4199wu/image/upload/v1668858549/udqhyxfz0juhowy1xtqu.png",
    //   });
    //   response && console.log(response);
    // })();

    // (async function _deleteArticle() {
    //   const response = await deleteArticle("23");
    //   // response && console.log(response);
    // })();
    // (async function _patchArticle() {
    //   const response = await patchArticle("2", {
    //     title: "제목",
    //     content: "내용",
    //     articleCategory: "질문",
    //     hashtagList: ["우리집고양이", "강아지", "화해함"],
    //   });
    //   // response && console.log(response);
    // })();
  }, [getMyArticles]);
  return <></>;
};

export default APITest;
