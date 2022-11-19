import { atom, selector } from 'recoil';
import { v1 } from 'uuid';
import { getArticles } from '../api/article';
import { cardDemoData } from '../components/ProductCardList';

export const articleAtom = atom({
  key: `articleAtom/${v1()}`,
  default: {
    articles: [],
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
    console.log('selector is called');
    if (!data) return cardDemoData;
    else return data;
  },
});
