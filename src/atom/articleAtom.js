import { atom, selector, selectorFamily } from "recoil";
import { v1 } from "uuid";
import { getArticle, getArticles } from "../api/article";
import { cardDemoData } from "../components/ProductCardList";

export const articleAtom = atom({
  key: `articleAtom/${v1()}`,
  default: {
    articles: [],
  },
});

export const selectedArticleAtom = atom({
  key: `selectedArticleAtom/${v1()}`,
  default: {
    selectedArticle: {},
  },
});

export const filteredArticlesAtom = atom({
  key: `filteredArticlesAtom/${v1()}`,
  default: {
    keyword: null,
    articles: [],
  },
});

export const articleSelector = selector({
  key: `articleSelector/${v1()}`,
  get: async ({ get }) => {
    const { data } = await getArticles();
    if (!data) return cardDemoData;
    else return data;
  },
});

export const selectedArticleSelector = selectorFamily({
  key: `selectedArticleSelector/${v1()}`,
  get:
    (articleId) =>
    async ({ get }) => {
      /**
       * @TODO
       * articlesAtom에 존재한다면 api를 호출하지 않습니다.
       */
      // const articles = get(articleAtom);
      // console.log(articles);
      // let selectedArticle;
      // if (articles.length !== 0) {
      //   selectedArticle = articles.filter(
      //     ({ id }) => id.toString() === articleId.toString()
      //   );
      // }
      // if (!selectedArticle) {
      //   const {
      //     data: { article },
      //   } = await getArticle(articleId.toString());
      //   selectedArticle = article;
      // }
      // return selectedArticle;
      if (!articleId) {
        return;
      }
      const { data } = await getArticle(articleId.toString());
      if (data) {
        return data.article;
      } else {
        return {
          id: 1,
          title: "게시글1 제목입니다!!",
          content: "게겍게겍ㄲ",
          likesCount: 10,
          dislikesCount: 0,
          articleCategory: "잡담",
          createdAt: "2022-10-14T05:21:13",
          user: {
            id: 1,
            username: "게시글 작성자",
            profileImgUrl: "tester photo",
          },
          hashtagList: [],
        };
      }
    },
});
