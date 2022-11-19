import { cardDemoData } from '../components/ProductCardList';
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
  return http
    .get(`/api/board/1/articles`, {
      page,
      order,
      keyword,
      hashtag,
    })
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
  articleId && checkType(articleId, 'string');
  return http.get(`/api/article/${articleId}`, articleId).catch((error) => {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
    window.alert('게시물 불러오기에 실패했습니다.');
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
  return http
    .post(`/api/board/1/articles`, {
      title,
      content,
      articleCategory,
      hashtagList,
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert('게시물 등록에 실패했습니다.');
    });
};

/**
 *
 * @param {string} articleId
 */
export const deleteArticle = (articleId) => {
  articleId && checkType(articleId, 'string');
  return http
    .delete(`/api/article/${articleId}`) //
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert('게시물 삭제에 실패했습니다.');
    });
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
  return http
    .patch(`/api/article/${articleId}`, {
      title,
      content,
      articleCategory,
      hashtagList,
    })
    .catch((error) => {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      window.alert('게시물 수정에 실패했습니다.');
    });
};
