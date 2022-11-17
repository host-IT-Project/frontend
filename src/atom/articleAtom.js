import { atom, selector } from 'recoil';
import axios from 'axios';

export const articleAtom = atom({
    key: 'articleAtom',
    default: {
        articles: [],
    },
});

export const articleSelector = selector({
    key: 'articleSelector',
    get: async ({ get }) => {
        const { data } = await getArticles();
        return data;
    },
    set: ({ set }) => {
        // set(forceReloadBoardListState, Math.random());
    },
});
