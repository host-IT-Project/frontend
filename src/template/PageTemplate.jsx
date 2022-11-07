import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const PageTemplateContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const ContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageTemplate = ({ children }) => (
    <PageTemplateContainer>
        <ContentsContainer>
            <Header />
            {children}
        </ContentsContainer>
    </PageTemplateContainer>
);

export default PageTemplate;
