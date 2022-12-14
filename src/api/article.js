import { cardDemoData } from "../components/ProductCardList";
import { checkType } from "../util/type";
import { http } from "./http";

export const getAllArticles = async ({
  page,
  order,
  keyword,
  hashtag,
} = {}) => {
  // page && checkType(page, "number");
  // order && checkType(order, "string");
  // keyword && checkType(keyword, "string");
  // hashtag && checkType(hashtag, "object");
  // return http
  //   .get(`/api/board/1/articles`, {
  //     // uri 수정
  //     page,
  //     order,
  //     keyword,
  //     hashtag,
  //   })
  //   .catch((error) => {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //     return cardDemoData;
  //   });
  let allArticles = [];
  for (let i = 0; i <= 3; i++) {
    const { data } = await getArticles({ page: i });
    allArticles = [...allArticles, ...data];
  }
  return { data: allArticles };
};

/**
 * @param {number} [page=0]
 * @param {'recent' | 'likes' | 'comment'} [order='recent']
 * @param {string} [keyword]
 * @param {Array<string>} [hashtag]
 */
export const getArticles = ({ page, order, keyword, hashtag } = {}) => {
  page && checkType(page, "number");
  order && checkType(order, "string");
  keyword && checkType(keyword, "string");
  hashtag && checkType(hashtag, "object");
  return http
    .get(
      `/api/board/1/articles${page ? `?page=${page}` : ""}`
      // {
      //   page,
      //   order,
      //   keyword,
      //   hashtag,
      // }
    )
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return cardDemoData;
    });
};

/**
 *
 * @param {string} articleId
 */
export const getArticle = (articleId) => {
  articleId && checkType(articleId, "string");
  return http.get(`/api/article/${articleId}`).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.location.href = "/error";
    return {
      article: {
        id: 0,
        title: "",
        description: "",
        thumbnail: "",
        content: "",
        likesCount: 0,
        dislikesCount: 0,
        articleCategory: "잡담",
        createdAt: [2000, 0, 0, 0, 0, 0],
        user: {
          id: 0,
          username: "",
          profileImgUrl:
            "http://k.kakaocdn.net/dn/bv2Nll/btrQTWzKF6E/i7Tuy0mHvzkik8RSYvTIF0/img_110x110.jpg",
        },
        hashtagList: [],
      },
    };
  });
};

/**
 *
 * @param {string} title
 * @param {string} description
 * @param {string} content
 * @param {Array<string>} [hashtagList]
 * @param {string} thumbnail
 */
export const postArticle = ({
  title,
  description,
  content,
  hashtagList,
  thumbnail,
  articleCategory,
} = {}) => {
  title && checkType(title, "string");
  description && checkType(description, "string");
  content && checkType(content, "string");
  hashtagList && checkType(hashtagList, "object");
  thumbnail && checkType(thumbnail, "string");
  return http
    .post(`/api/board/1/article`, {
      title,
      articleCategory,
      description,
      content,
      hashtagList,
      thumbnail,
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert("게시물 등록에 실패했습니다.");
      window.location.href = "/error";
      return;
    });
};

/**
 *
 * @param {string} articleId
 */
export const deleteArticle = (articleId) => {
  articleId && checkType(articleId, "string");
  return http
    .delete(`/api/article/${articleId}`) //
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert("게시물 삭제에 실패했습니다.");
      window.location.href = "/error";
    });
};

/**
 *
 * @param {string} articleId
 * @param {string} title
 * @param {string} description
 * @param {string} content
 * @param {Array<string>} [hashtagList]
 * @param {string} thumbnail
 */
export const patchArticle = (
  articleId,
  { title, description, content, hashtagList, thumbnail, articleCategory } = {}
) => {
  // articleId && checkType(articleId, "string");
  title && checkType(title, "string");
  description && checkType(description, "string");
  content && checkType(content, "string");
  hashtagList && checkType(hashtagList, "object");
  thumbnail && checkType(thumbnail, "string");
  return http
    .patch(`/api/article/${articleId}`, {
      articleCategory,
      title,
      description,
      content,
      hashtagList,
      thumbnail,
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert("게시물 수정에 실패했습니다.");
      window.location.href = "/error";
    });
};
