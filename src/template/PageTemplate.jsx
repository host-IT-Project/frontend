import React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const PageTemplateContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background: ${({ theme }) => theme.colors.background};
`;

const ChildrenWrapper = styled.div`
    margin: 0 auto;
`;

const ContentsWrapper = styled.div`
    width: 90%;
    max-width: 1100px;
    margin: 3rem auto;
`;

const PageTemplate = ({ children, contents }) => {
    return (
        <PageTemplateContainer>
            <Header />
            <ChildrenWrapper>{children}</ChildrenWrapper>
            <ContentsWrapper>{contents}</ContentsWrapper>
        </PageTemplateContainer>
    );
};

export default PageTemplate;
