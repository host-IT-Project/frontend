import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

const PageTemplateContainer = styled.div`
  box-sizing: border-box;
  padding-bottom: 230px;
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
    <>
      <PageTemplateContainer>
        <Header />
        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
        {contents && <ContentsWrapper>{contents}</ContentsWrapper>}
      </PageTemplateContainer>
      <Footer />
    </>
  );
};

export default PageTemplate;
