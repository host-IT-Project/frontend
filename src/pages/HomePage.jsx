import React from 'react';
import APITest from '../api/APITest';
import PageTemplate from '../template/PageTemplate';

const HomePage = (props) => (
    <PageTemplate>
        HomePage
        <APITest />
    </PageTemplate>
);

export default HomePage;
