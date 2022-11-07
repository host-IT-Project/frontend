import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const PageTemplateContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const ContentsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PageTemplate = ({ children }) => (
  <PageTemplateContainer>
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
  </PageTemplateContainer>
);

export default PageTemplate;
