import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const PageTemplateContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`;

const ContentWrapper = styled.div`
    margin: 0 auto;
`;

const PageTemplate = ({ children }) => (
    <PageTemplateContainer>
        <Header />
        <ContentWrapper>{children}</ContentWrapper>
    </PageTemplateContainer>
);

export default PageTemplate;
