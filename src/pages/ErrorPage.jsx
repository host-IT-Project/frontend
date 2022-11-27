import React from "react";
import PageTemplate from "../template/PageTemplate";
import AnnounceForm from "../components/AnnounceForm";

const ErrorPage = ({ message, description }) => (
  <PageTemplate
    contents={<AnnounceForm message={message} description={description} />}
  ></PageTemplate>
);

ErrorPage.defaultProps = {
  message: "요청에 실패했습니다.",
  description: "새로고침 후 다시 시도해보세요.",
};

export default ErrorPage;
