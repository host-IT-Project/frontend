import React, { useEffect } from 'react';
import {
    deleteArticle,
    getArticles,
    patchArticle,
    postArticle,
} from './article';

const APITest = (props) => {
    useEffect(() => {
        (async function _getArticles() {
            const articles = await getArticles({ page: 2, order: 'likes' });
            // articles && console.log(articles);
        })();
        (async function _postArticle() {
            const response = await postArticle({
                title: '제목',
                content: '내용',
                articleCategory: '질문',
                hashtagList: ['우리집고양이', '강아지', '싸움'],
            });
            // response && console.log(response);
        })();
        (async function _deleteArticle() {
            const response = await deleteArticle('23');
            // response && console.log(response);
        })();
        (async function _patchArticle() {
            const response = await patchArticle('2', {
                title: '제목',
                content: '내용',
                articleCategory: '질문',
                hashtagList: ['우리집고양이', '강아지', '화해함'],
            });
            // response && console.log(response);
        })();
    }, []);
    return <></>;
};

export default APITest;
