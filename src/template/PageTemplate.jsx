import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import NewArticleButton from "../components/common/NewArticleButton";

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
  const location = useLocation();
  const buttonExceptionPath = ["/edit", "/login", "/logout", "/redirect"];
  const isButtonVaild = !buttonExceptionPath.includes(location.pathname);

  return (
    <>
      <PageTemplateContainer>
        <Header />
        {children && <ChildrenWrapper>{children}</ChildrenWrapper>}
        {contents && <ContentsWrapper>{contents}</ContentsWrapper>}
      </PageTemplateContainer>
      <Footer />
      {isButtonVaild && (
        <aside className="button-new">
          <NewArticleButton />
        </aside>
      )}
    </>
  );
};

export default PageTemplate;
