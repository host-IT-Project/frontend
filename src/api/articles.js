import { checkType } from '../util/type';
import { http } from './http';

/**
 * @param {Number} [page=0]
 * @param {'recent' | 'likes' | 'comment'} [order='recent']
 * @param {string} [keyword]
 * @param {Array<string>} [hashtag]
 */

export const getArticles = ({ page, order, keyword, hashtag }) => {
    checkType(page, 'number');
    checkType(order, 'string');
    checkType(keyword, 'string');
    checkType(hashtag, 'object');
    return http.get(`/api/board/1/articles`, {
        page,
        order,
        keyword,
        hashtag,
    });
};
