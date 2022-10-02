import React, { useEffect, useState } from 'react';
import { getArticles } from '../api/article';
import ProductCardList from '../components/ProductCardList';
import PageTemplate from '../template/PageTemplate';

const ArchivePage = (props) => {
    const [articles, setArticles] = useState();

    useEffect(() => {
        (async function fetchData() {
            const newArticles = await getArticles();
            setArticles(newArticles.data);
        })();
    }, []);

    return (
        <PageTemplate>
            {articles && <ProductCardList cardData={articles} />}
        </PageTemplate>
    );
};

export default ArchivePage;
