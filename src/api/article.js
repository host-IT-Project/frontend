import { checkType } from '../util/type';
import { http } from './http';

/**
 * @param {number} [page=0]
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
}) => {
    checkType(title, 'string');
    checkType(content, 'string');
    checkType(articleCategory, 'string');
    checkType(hashtagList, 'object');
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
    checkType(articleId, 'string');
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
    { title, content, articleCategory, hashtagList }
) => {
    checkType(articleId, 'string');
    checkType(title, 'string');
    checkType(content, 'string');
    checkType(articleCategory, 'string');
    checkType(hashtagList, 'object');
    return http.patch(`/api/article/${articleId}`, {
        title,
        content,
        articleCategory,
        hashtagList,
    });
};
