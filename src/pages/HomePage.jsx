import React, { useEffect } from 'react';
import { getArticles } from '../api/articles';
import PageTemplate from '../template/PageTemplate';

const HomePage = (props) => {
    useEffect(() => {
        (async function fetchData() {
            const articles = await getArticles({ page: 2, order: 'likes' });
            articles && console.log(articles);
        })();
    }, []);

    return <PageTemplate>HomePage</PageTemplate>;
};

export default HomePage;
