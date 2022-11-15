import React from 'react';
import APITest from '../api/APITest';
import BannerCarousel from '../components/BannerCarousel';
import PageTemplate from '../template/PageTemplate';

const HomePage = (props) => (
    <PageTemplate>
        <APITest />
        <BannerCarousel />
    </PageTemplate>
);

export default HomePage;
