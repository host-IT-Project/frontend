import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const PageTemplateContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const PageTemplate = ({ children }) => (
    <PageTemplateContainer>
        <Header />
        {children}
    </PageTemplateContainer>
);

export default PageTemplate;
