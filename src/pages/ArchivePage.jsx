import React, { useEffect, useState } from 'react';
import { getArticles } from '../api/article';
import ProductCardList, { cardDemoData } from '../components/ProductCardList';
import PageTemplate from '../template/PageTemplate';
import SearchForm from '../components/search/SearchForm';

const ArchivePage = (props) => {
    const [articles, setArticles] = useState({
        articles: [],
        filteredArticles: [],
        searchWord: null,
    });

    useEffect(() => {
        (async function fetchData() {
            try {
                const fetchedArticles = await getArticles();
                setArticles((oldArticles) => {
                    const newArticles = {
                        ...oldArticles,
                        articles: fetchedArticles.data,
                    };
                    return newArticles;
                });
            } catch (e) {
                setArticles((oldArticles) => {
                    const newArticles = {
                        ...oldArticles,
                        articles: cardDemoData,
                    };
                    return newArticles;
                });
            }
        })();
    }, []);

    const handleSubmitInput = (newInputValue) => {
        const filteredArticles = articles.articles.filter(({ title }) =>
            title.includes(newInputValue)
        );
        if (newInputValue && newInputValue.trim() !== '') {
            setArticles((oldArticles) => {
                const newArticles = {
                    ...oldArticles,
                    filteredArticles: filteredArticles,
                    searchWord: newInputValue,
                };
                return newArticles;
            });
        } else {
            setArticles((oldArticles) => {
                const newArticles = {
                    ...oldArticles,
                    filteredArticles: [],
                    searchWord: '',
                };
                return newArticles;
            });
        }
    };

    const handleSubmitTag = (newTagList) => {
        /**
         * @TODO
         * 태그 검색 구현 필요함
         */
        const filteredArticles = articles.articles.filter(({ hashtagList }) => {
            newTagList.forEach((tag) => {
                if (!hashtagList.includes(tag)) {
                    console.log('포함하지 않음');
                    return false;
                }
            });
            return true;
        });
        if (filteredArticles.length === 0) {
            setArticles((oldArticles) => {
                const newArticles = {
                    ...oldArticles,
                    filteredArticles: [],
                };
                return newArticles;
            });
        } else {
            setArticles((oldArticles) => {
                const newArticles = {
                    ...oldArticles,
                    filteredArticles: filteredArticles,
                };
                return newArticles;
            });
        }
    };

    return (
        <PageTemplate>
            <SearchForm
                articles={articles.articles}
                tagList={['컴퓨터공학과', '태그1', '태그2']}
                onSubmitInput={handleSubmitInput}
                onSubmitTag={handleSubmitTag}
            />
            {articles.filteredArticles.length === 0 &&
                articles.searchWord !== null && (
                    <h3>
                        '{articles.searchWord}'와(과) 일치하는 검색결과가
                        없습니다. 아래의 게시물들은 어떠신가요?
                    </h3>
                )}
            {articles.filteredArticles.length !== 0 ? (
                <ProductCardList cardData={articles.filteredArticles} />
            ) : (
                <ProductCardList cardData={articles.articles} />
            )}
        </PageTemplate>
    );
};

export default ArchivePage;
