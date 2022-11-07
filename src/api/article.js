import { checkType } from '../util/type';
import { http } from './http';

/**
 * @param {number} [page=0]
 * @param {'recent' | 'likes' | 'comment'} [order='recent']
 * @param {string} [keyword]
 * @param {Array<string>} [hashtag]
 */
export const getArticles = ({ page, order, keyword, hashtag } = {}) => {
    page && checkType(page, 'number');
    order && checkType(order, 'string');
    keyword && checkType(keyword, 'string');
    hashtag && checkType(hashtag, 'object');
    return http.get(`/api/board/1/articles`, {
        page,
        order,
        keyword,
        hashtag,
    });
};

/**
 *
 * @param {string} title
 * @param {string} content
 * @param {string} [articleCategory='질문']
 * @param {Array<string>} [hashtagList]
 */
export const postArticle = ({
    title,
    content,
    articleCategory,
    hashtagList,
} = {}) => {
    title && checkType(title, 'string');
    content && checkType(content, 'string');
    articleCategory && checkType(articleCategory, 'string');
    hashtagList && checkType(hashtagList, 'object');
    return http.post(`/api/board/1/article`, {
        title,
        content,
        articleCategory,
        hashtagList,
    });
};

/**
 *
 * @param {string} articleId
 */
export const deleteArticle = (articleId) => {
    articleId && checkType(articleId, 'string');
    return http.delete(`/api/article/${articleId}`);
};

/**
 *
 * @param {string} articleId
 * @param {string} title
 * @param {string} content
 * @param {string} [articleCategory='질문']
 * @param {Array<string>} [hashtagList]
 */
export const patchArticle = (
    articleId,
    { title, content, articleCategory, hashtagList } = {}
) => {
    articleId && checkType(articleId, 'string');
    title && checkType(title, 'string');
    content && checkType(content, 'string');
    articleCategory && checkType(articleCategory, 'string');
    hashtagList && checkType(hashtagList, 'object');
    return http.patch(`/api/article/${articleId}`, {
        title,
        content,
        articleCategory,
        hashtagList,
    });
};
