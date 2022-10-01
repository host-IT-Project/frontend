import axios from 'axios';
import React, { useEffect } from 'react';
import { useRef } from 'react';
import { getArticles } from '../api/articles';
import PageTemplate from '../template/PageTemplate';

const HomePage = (props) => {
    const ref = useRef();
    useEffect(() => {
        (async function fetchData() {
            const articles = await getArticles({ page: 2, order: 'likes' });
            articles && console.log(articles);
        })();

        axios.get('http://localhost:5001').then((table) => {
            let WeeklyMeal = '';
            table.data.weekly_meal.forEach((menu) => {
                WeeklyMeal += `${menu}
                `;
            });
            ref.current.innerHTML = WeeklyMeal;
        });
    }, []);

    return (
        <PageTemplate>
            HomePage
            <div ref={ref}></div>
        </PageTemplate>
    );
};

export default HomePage;
