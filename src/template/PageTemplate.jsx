import React from "react";
import Header from "../components/Header";
import styled from "styled-components";

const PageTemplateContainer = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  max-width: 860px;
  margin: 0 auto;
`;

const PageTemplate = ({ children }) => (
  <PageTemplateContainer>
    <Header />
    <ContentWrapper>{children}</ContentWrapper>
  </PageTemplateContainer>
);

export default PageTemplate;
