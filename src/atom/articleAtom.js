import { atom, selector, selectorFamily } from "recoil";
import { v1 } from "uuid";
import { getAllArticles, getArticle } from "../api/article";
import { cardDemoData } from "../components/card/ProductCardList";

export const articlesAtom = atom({
  key: `articlesAtom/${v1()}`,
  default: [],
  effects: [
    async ({ setSelf }) => {
      const articles = await getAllArticles();
      if (!articles) {
        setSelf(cardDemoData);
      } else {
        setSelf(articles.data);
      }
    },
  ],
});

export const articlesFilterAtom = atom({
  key: `articlesFilterAtom/${v1()}`,
  default: "",
});

export const filteredArticlesSelector = selector({
  key: `filteredArticlesSelector/${v1()}`,
  get: ({ get }) => {
    const filter = get(articlesFilterAtom);
    const articles = get(articlesAtom);

    return articles.filter(({ title }) => title.includes(filter));
  },
});

export const curruntArticleSelector = selectorFamily({
  key: `curruntArticleSelector/${v1()}`,
  get: (id) => async () => {
    if (id === undefined) return {};

    const { data } = await getArticle(id);
    if (!data) return {};
    return data.article;
  },
});
