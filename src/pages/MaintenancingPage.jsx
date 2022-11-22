import React from "react";
import PageTemplate from "../template/PageTemplate";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0px auto;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.font.gmarketSans};

  .icon-announce {
    font-size: 6rem;
    margin: 20px 0;
  }

  .text-message {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  .text-description {
    font-size: 1.6rem;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.middlegray};
  }
`;

const AnnounceForm = ({ message, description }) => (
  <StyledContainer>
    <ErrorOutlineIcon className="icon-announce" color="disabled" />
    <p className="text-message">{message}</p>
    {description && <p className="text-description">{description}</p>}
  </StyledContainer>
);

const ErrorPage = ({ message, description }) => (
  <PageTemplate
    contents={
      <AnnounceForm
        message={"긴급 점검 안내"}
        description={
          "현재 게시글 불러오기에 오류가 발생하여 긴급 점검 중입니다. 예정 시간: 11월 22일(화) 19:00 ~ 19:30"
        }
      ></AnnounceForm>
    }
  ></PageTemplate>
);

ErrorPage.defaultProps = {
  message: "요청에 실패했습니다.",
  description: "새로고침 후 다시 시도해보세요.",
};

export default ErrorPage;
