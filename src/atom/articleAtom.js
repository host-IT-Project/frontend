import { atom, selector, selectorFamily } from "recoil";
import { v1 } from "uuid";
import { getAllArticles, getArticle } from "../api/article";
import { cardDemoData } from "../components/card/ProductCardList";

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
    const { data } = await getAllArticles();
    if (!data) {
      return [...cardDemoData];
    } else {
      return data;
    }
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
      if (!articleId) {
        return;
      }
      const { data } = await getArticle(articleId.toString());
      if (!data) {
        return {};
      } else {
        return data.article;
      }
    },
});
